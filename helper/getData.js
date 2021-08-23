import path from "path";
import fs from "fs/promises";

export async function getData(name) {
	const filePath = path.join(process.cwd(), "data", `${name}.json`);
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return data;
}
