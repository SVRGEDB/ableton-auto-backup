import { copyRecursiveSync } from "./logic";

const FOLDER_TO_BACKUP = "X:/Ableton Projects";
const FOLDER_TO_BACKUP_TO = "Z:/Ableton backups";

copyRecursiveSync(FOLDER_TO_BACKUP, FOLDER_TO_BACKUP_TO);
