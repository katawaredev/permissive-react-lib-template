import "./index.css";
import Development from "componens/Development";
import Production from "componens/Production";

export { default as AppWrapper } from "AppWrapper";

export const Bundle = () => (__DEV__ ? <Development /> : <Production />);

export const sleep = async () => await Promise.resolve();
