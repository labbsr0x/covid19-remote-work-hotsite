import { useState, useEffect } from 'react'

export default () => {

    const [messageType, setMessageType] = useState("")
    const [message, setMessage] = useState("")
    const [requestKitData, setRequestKitData] = useState("")

    const [key, setKey] = useState("")
    const [password, setPassword] = useState("")

    const requestKitURL = `${process.env.REACT_APP_BACKEND_API_URL}/kit`

    useEffect(_ => {
        let storedKey = ""
        if (window.localStorage.getItem("user")) {
            const storedUser = JSON.parse(window.localStorage.getItem("user"))
            storedKey = storedUser.key
        } else if (window.localStorage.getItem("user_key")) {
            storedKey = window.localStorage.getItem("user_key")
        }
        const getKitURL = `${process.env.REACT_APP_BACKEND_API_URL}/kit/${storedKey}`
        fetch(getKitURL).then(resp => {
            if (resp.status === 200) {
                return resp.json()
            }
        })
            .then(ret => {
                if (ret) {
                    setRequestKitData(ret)
                }
            })
    }, [])

    const requestKit = () => {
        if (!key) {
            return
        }

        if (!key.match(/[fF]\d{7}/)) {
            setMessageType("danger")
            setMessage(`A matrícula informada - ${key} - não está no formato correto (ex: F1234567)`)
            return
        }

        const requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify({
                "key": key
            }),
        };
        setMessage("")
        fetch(requestKitURL, requestOptions)
            .then(resp => {
                if (resp.status === 500) {
                    setMessageType("danger")
                    setMessage("Houve um erro de conexão ao realizar a requisição do seu kit. Aguarde alguns instantes e tente novamente, por favor.")

                } else if (resp.status === 409) {
                    setMessageType("warning")
                    setMessage("Já existe uma requisição de criação do kit de acesso remoto em andamento. Estamos te redirecionando para a página de download do kit para você conferir o status do processamento.")
                    window.localStorage.setItem("user_key", key)
                    setTimeout(_ => window.location.reload(), 8000)

                } else if (resp.status === 201) {
                    return resp.json()
                }
            })
            .then(jsonObj => {
                if (jsonObj) {
                    setMessageType("success")
                    setMessage("Seu pedido para geração do kit de trabalho remoto foi gerado com sucesso! Aguarde alguns instantes e entre novamente nessa página para ver se o seu kit já está disponível para download.")
                    window.localStorage.setItem("user", JSON.stringify(jsonObj))
                    window.localStorage.setItem("user_key", jsonObj.key)
                    setTimeout(_ => window.location.reload(), 10000)
                }
            })

    }

    return {
        messageType,
        message,
        requestKitData,
        key, setKey,
        password, setPassword,
        requestKit
    }
}