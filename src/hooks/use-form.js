import React, { useEffect, useState } from 'react'


const useForm = (styleForm, inputElement = [], add = '') => {
    const init = () => {
        const inp = {}
        if (inputElement) {
            inputElement.map(item => {
                inp[`${item.id}`] = ''
            })
        } else {
            inp.name = ''
        }
        return inp
    }

    const [input, setInput] = useState(init)
    const [error, setError] = useState(init)
    const [isActive, setIsActive] = useState(false)
    const [out, setout] = useState(init)
    const changeHandler = (e) => {
        setIsActive(false)
        const { id, value } = e.target
        setInput({
            ...input, [id]: value
        })
        if (value.trim() === '' || value.trim().length < 3) {
            setError({
                ...error, [id]: `please enter ${id} greater than 2 letters`
            })
        } else {
            setError({
                ...error, [id]: ''
            })
        }
    }
    const formHandler = (e) => {
        e.preventDefault()
        const err = {}
        Object.keys(input).map(item => {
            if (input[`${item}`].trim() === '' || input[`${item}`].trim().length < 3) {
                err[`${item}`] = `please enter ${item} greater than 2 letters`
            }
        })
        setError(err)
        setIsActive(true)

        let errNum = 0
        Object.keys(error).map(item => {
            if (error[`${item}`] !== '') {
                errNum += 1
            }
        })
        if (errNum === 0) {
            setout(input)
            setInput(init)
        }
    }


    const formElement = (
        <form onSubmit={formHandler} className={styleForm.form}>

            {inputElement ?
                inputElement.map((element, ind) => {
                    if (element.name === "input") {
                        if (element.type === 'text') {
                            return <div key={ind} >
                                {error[`${element.id}`] && <span className={styleForm.span} >*</span>}
                                <input className={styleForm.input}
                                    type={element.type} id={element.id} value={input[`${element.id}`]} onChange={changeHandler}
                                    placeholder={`enter the ${element.id}`}
                                />
                            </div>
                        }
                        if (element.type === 'number') {
                            return <div key={ind} >
                                {error[`${element.id}`] && <span className={styleForm.span} >*</span>}
                                <input className={styleForm.input}
                                    type={element.type} id={element.id} value={input[`${element.id}`]} onChange={changeHandler}
                                    placeholder={`enter the ${element.id}`}
                                />
                            </div>
                        }
                        if (element.type === 'password') {
                            return <div key={ind} >
                                {error[`${element.id}`] && <span className={styleForm.span} >*</span>}
                                <input className={styleForm.input}
                                    type={element.type} id={element.id} value={input[`${element.id}`]} onChange={changeHandler}
                                    placeholder={`enter the ${element.id}`}
                                />
                            </div>
                        }
                        if (element.type === 'email') {
                            return <div key={ind} >
                                {error[`${element.id}`] && <span className={styleForm.span} >*</span>}
                                <input className={styleForm.input}
                                    type={element.type} id={element.id} value={input[`${element.id}`]} onChange={changeHandler}
                                    placeholder={`enter the ${element.id}`}
                                />
                            </div>
                        }
                    }
                    if (element.name === 'textarea') {
                        return <div key={ind}>
                            {error[`${element.id}`] && <span className={styleForm.span} >*</span>}
                            <textarea key={ind} id={element.id} className={styleForm.textarea}
                                value={input[`${element.id}`]} onChange={changeHandler}
                                placeholder={`enter the ${element.id}`}
                            ></textarea>
                        </div>

                    }
                })
                : <div >
                    {error.name && <span className={styleForm.span} >*</span>}
                    <input className={styleForm.input}
                        type='text' id='name' value={input.name} onChange={changeHandler}
                        placeholder={`enter the name`}
                    />
                </div>
            }
            <div>
                <button className={styleForm.btn} >{add === '' ? '+' : add}</button>
            </div>


        </form>)

    return { formElement, out, isActive }
}

export default useForm