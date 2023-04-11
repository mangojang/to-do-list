import { FormBox, Layout } from "./style";

const FormLayout = ({children})=>{
    return(
        <Layout>
            <FormBox>
                {children}
            </FormBox>
      </Layout>
    );
};

export default FormLayout;