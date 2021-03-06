import React, { useEffect } from 'react'
import useRequestFormModel from './useRequestFormModel'

function RequestForm() {

    const {
        message, messageType,
        requestKitData,
        key, setKey,
        password, setPassword,
        requestKit
    } = useRequestFormModel()

    useEffect(() => {
        window.jQuery(function () {
            window.jQuery('[data-toggle="tooltip"]').tooltip()
        })
    }, [])

    return <>
        {requestKitData &&
            <>
                {!requestKitData.kitDownloadURL &&
                    <>
                        <h3 className="login-heading mb-4">Seu kit está em processamento</h3>
                        <div className="alert-warning p-3">Sua requisição foi recebida e o seu kit está em construção. A matrícula vinculada ao kit é a <strong>{requestKitData.key}</strong> e o seu download poderá ser feito em breve nessa página.</div>
                    </>
                }
                {requestKitData.kitDownloadURL &&
                    <>
                        <h3 className="login-heading mb-4">Seu kit está pronto!</h3>
                        <div className="p-2">
                            <div className="mb-2">O kit acabou de ser processado e por ser baixado.</div>
                            <a href={requestKitData.kitDownloadURL} className="btn btn-primary" title="Kit Download">Baixar kit de trabalho remoto</a>
                            <div className="mt-4"><a href="/como-utilizar-o-kit">Como utilizar o kit?</a></div>
                        </div>
                    </>
                }
            </>
        }
        {!requestKitData &&
            <>
                <h3 className="login-heading mb-4">Solicite seu kit de trabalho remoto</h3>
                {message &&
                    <div className={"m-2 p-4 alert-" + messageType}>
                        {message}
                    </div>
                }
                <form onSubmit={e => { e.preventDefault(); requestKit() }}>
                    <div className="form-label-group">
                        <input defaultValue={key} maxLength={8} data-toggle="tooltip" data-placement="top" title="No formato FXXXXXXX" onChange={e => setKey(e.target.value)} type="chave" id="inputChave" className="form-control" placeholder="Chave Funcional (FXXXXXXX)" required autoFocus />
                        <label htmlFor="inputChave">Chave Funcional</label>
                    </div>

                    <div className="form-label-group">
                        <input defaultValue={password} data-toggle="tooltip" data-placement="top" title="Não é a senha SISBB" onChange={e => setPassword(e.target.value)} type="password" id="inputSenha" className="form-control" placeholder="Senha" required />
                        <label htmlFor="inputSenha">Senha de portais externos </label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">
                        Solicitar
                </button>
                    <div className="text-center">
                        <a className="small" href="/sobre-a-senha">Não tem ou não lembra a senha de portais externos?</a></div>
                </form>
            </>
        }
    </>
}

export default RequestForm