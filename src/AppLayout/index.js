import { FormBox, Layout, TodoBox } from "./style";

const AppLayout = ({type, children})=>{
    return(
        <Layout>
            {type==='form'
            ?<FormBox>
                {children}
            </FormBox>
            :<TodoBox>
                {children}
            </TodoBox>
            }
            
      </Layout>
    );
};

export default AppLayout;