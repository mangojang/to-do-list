import { FormBox, Layout, TodoBox } from "./style";

const AppLayout = ({type, children})=>{
    return(
        <Layout>
            {type==='form'
            ?<FormBox>
                {children}
                <span className="sign">made by <a href="mailto:mangojang@gmail.com">mangojang</a></span>
            </FormBox>
            :<TodoBox>
                {children}
                <span className="sign">made by <a href="mailto:mangojang@gmail.com">mangojang</a></span>
            </TodoBox>
            }
      </Layout>
    );
};

export default AppLayout;