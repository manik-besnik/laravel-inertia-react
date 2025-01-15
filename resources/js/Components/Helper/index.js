import {taskType} from "@/Components/Constant/index.js";

export const getTaskCoin = (type = taskType.like) => {

    let taskCoin = 4;

    if (type === taskType.clap) {
        taskCoin = 4;
    }
    if (type === taskType.like) {
        taskCoin = 4;
    }
    if (type === taskType.comment) {
        taskCoin = 6;
    }
    if (type === taskType.follow) {
        taskCoin = 8;
    }
    if (type === taskType.share) {
        taskCoin = 6;
    }
    if (type === taskType.save) {
        taskCoin = 6;
    }
    if (type === taskType.repost) {
        taskCoin = 6;
    }
    if (type === taskType.subscribe) {
        taskCoin = 8;
    }

    return taskCoin;
}


export const getFormattedDate = (dateTime) => {
    const date = new Date(dateTime);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;

}
