import React, { Fragment, useState } from "react";
import styles from "./stepper.module.css";
import { Steps } from "antd";
import {
  CheckCircleOutlined,
  LoginOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Form } from "formik";

const Stepper = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className={styles.stepsContainer}>
        <Steps
          className={styles.stepDesign}
          onChange={setCurrent}
          current={current}>
          <Steps.Step title="SignUp" icon={<LoginOutlined />} />
          <Steps.Step title="Login" icon={<ProfileOutlined />} />
          <Steps.Step title="Finish" icon={<CheckCircleOutlined />} />
        </Steps>
      </div>

      <div className={styles.formDesign}>
        <LoginForm />
      </div>
    </>
  );
};

function LoginForm() {
  return (
    <section className={styles.formDesign}>
      <form>
        <div>
          <input type="email" name="email" required placeholder="Email" />
        </div>

        <div>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </div>

        <button className={styles.buttonDesign}>Continue</button>
      </form>
    </section>
  );
}

export default Stepper;
