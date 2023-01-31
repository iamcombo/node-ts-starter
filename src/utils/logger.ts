import dayjs from "dayjs";
import logger from "pino";

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    }
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log;
