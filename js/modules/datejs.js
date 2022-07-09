import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export function timeFromNow(timeString){
    return dayjs().to(dayjs(timeString))
}
