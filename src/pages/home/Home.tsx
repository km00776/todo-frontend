import BasicFormControl from "./components/formInput/FormInput";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to your todo list! 🎉</h1>
      <div className={styles.row}>
        <BasicFormControl />
      </div>
    </div>
  );
};

export default Home;
