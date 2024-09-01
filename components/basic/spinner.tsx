import styles from './spinner.module.css';

//  border: 16px solid #f3f3f3;
//border-top: 16px solid #3498db;

export default function Spinner({ scale }: { scale: string }) {
  return (
    <div
      className={styles.spinner + ' border-neutral-300 border-t-primary-400 border-8 border-t-8'}
      style={{ width: scale, height: scale }}
    ></div>
  );
}

export function Spinner2() {
  return (
    <div>
      <svg fill="none" height="1em" viewBox="-12 -12 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <path className={styles["animate-5"]}  d="M 0 2.1 l 0 4" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" />
      <path className={styles["animate-1"]} d="M 0 -2.1 l 0 -4" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" />
      <path className={styles["animate-75"]} d="M 2.1 0 l 4 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path className={styles["animate-25"]}  d="M -2.1 0 l -4 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path className={styles["animate-125"]}  d="M -1.514 -1.514 l -2.828 -2.828" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path className={styles["animate-625"]}  d="M 1.514 1.514 l 2.828 2.828" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path className={styles["animate-375"]}  d="M -1.514 1.514 l -2.828 2.828" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" />
      <path className={styles["animate-875"]}  d="M 1.514 -1.514 l 2.828 -2.828" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}