import { Form, Input } from 'antd';
import Button from '@/components/Atoms/Button';
import { useAuth } from '@/context/Auth';
import { CompleteProfile } from '@/context/Auth/types';
import { WrapperStyle } from './style';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ROUTES from '@/config/routes';
import storage from '@/utils/storage';
import { authKey } from '@/config';

type QuizProps = BaseComponent;

const CompleteProfile = (props: QuizProps) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { completeProfile, loadingCallbacks } = useAuth();

  const onFinish = (values: CompleteProfile) => {
    completeProfile(values).then();
  };

  useEffect(() => {
    if (storage.getItem(authKey)) {
      router.replace(ROUTES.CONNECT_WALLET.path).then();
    }
  }, [router]);

  return (
    <WrapperStyle {...props}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          required
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'First Name is required!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          required
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Last Name is required!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          required
          name="email"
          label="E-mail"
          rules={[
            { required: true, message: 'E-mail is required!' },
            { type: 'email' },
          ]}
        >
          <Input placeholder="email" type="email" />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ width: '100%' }}
            loading={loadingCallbacks}
            onClick={() => form.submit()}
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </WrapperStyle>
  );
};

export default CompleteProfile;
