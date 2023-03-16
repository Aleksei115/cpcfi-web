/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import styles from './customEditor.module.scss';
import { api } from '../../../utils/api';
import { Console } from 'console';



export const CustomEditor = () => {

  const [tokenSubmission, setTokenSubmission] = useState("")
  const [codeText, setCodeText] = useState<string>("");
  const [isSent, setIsSent] = useState(false)

  // const createSubmissionQuery = api.compiler.createSubmission.useQuery({ srcCode: codeText})
  


  // useEffect(() => {
    
  //   if(isSent)
  //     showCodeText()
  //   // setTokenSubmission(createSubmissionQuery.data.token)

  // }, [isSent,showCodeText])  

  // const testimoniesQuery = api.testimonie.getAllTestimonies.useQuery()

  // useEffect(() => {

  //   setTestimonies(testimoniesQuery.data)

  // }, [testimoniesQuery.data, testimoniesQuery.isLoading])


    // const [startFetching, setStartFetching] = useState(false)


    // const [outputText, setOutputText] = useState<string | undefined>("")

    function handleEditorCodeChange(value: string | undefined) {
        if( value === undefined )
          value = ""
        setCodeText(value)
    }





    return(
        <div className={styles['container-editor']}>
            <div className={`${styles['container-code']} ${styles['containers-editors']}`}>
                <Editor
                    height="100%"
                    width="100%"
                    theme="vs-dark"
                    language='cpp'
                    options={{
                        minimap: {
                          enabled: true,
                        },
                        fontSize: 18,
                        cursorStyle: "block",
                        wordWrap: "on",
                      }}
                    value={"//CPCFI COMPILER"}
                    onChange={handleEditorCodeChange}
                />
            </div>
            <div className={`${styles['container-options']} ${styles['containers-editors']}`}>
                <button onClick={()=>{ setIsSent(true) }}>Run</button>
                {/* <button onClick={showCodeText}>Run</button> */}
            </div>
            <div className={`${styles['container-input']} ${styles['containers-editors']}`}>
                <Editor
                    height="100%"
                    width="100%"
                    theme="vs-dark"
                    language='txt'
                    options={{
                        minimap: {
                        enabled: true,
                        },
                        fontSize: 18,
                        cursorStyle: "block",
                        wordWrap: "on",
                    }}
                    value={"// write your code here"}
                />
            </div> 
            <div className={`${styles['container-output']} ${styles['containers-editors']}`}>
                <Editor
                    height="100%"
                    width="100%"
                    theme="vs-dark"
                    language='txt'
                    options={{
                        minimap: {
                        enabled: true,
                        },
                        fontSize: 18,
                        cursorStyle: "block",
                        wordWrap: "on",
                    }}
                    value={"// write your code here"}
                />
            </div>
        </div>
    )


}