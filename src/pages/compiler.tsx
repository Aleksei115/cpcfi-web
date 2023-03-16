import { type NextPage } from "next";
import { CustomEditor } from "../components/compiler";
import { MainLayout } from '../layouts'


const Compiler: NextPage = () => {

  return (
    <MainLayout>
      <CustomEditor />
    </MainLayout>
  )
};



export default Compiler;