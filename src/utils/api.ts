import axios from "axios";
import { gist } from "./interfaces";

export default async function API(): Promise<gist> {
  const { data } = await axios.get(
    "https://api.github.com/gists/103b8884c900bae1e495afa2c495ff4c",
  );
  const response = JSON.parse(data.files["projects.json"].content);
  return response;
}
