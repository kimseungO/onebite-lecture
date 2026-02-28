import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    usePageTitle("새 일기 쓰기")

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content)
        nav('/', {replace:true}) // ai에 의해 onSubmit 함수 외부에서 안으로 옮김. 추후 문제시 확인 필요
    };

    return <div>
        <Header
            title={"새 일기 쓰기"}
            leftChild={<Button onClick={ ()=>nav(-1)} text={"< 뒤로 가기"}/>}
        />
        <Editor onSubmit={onSubmit} />
        
    </div>
};

export default New