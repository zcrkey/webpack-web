export class Utils {

  /**
   * 判断是否为字符串
   * @param value
   * @returns {boolean}
   */
  public static isString(value: any) {
    return Object.prototype.toString.call(value) === "[object String]";
  }

  /**
   * 格式化日期
   */
  public static formatTime(date: any, type: "date" | "dateYM" | "time" | "timeHM" | "datetime" = "date", dateSignTemp?: string, timeSignTemp?: string) {
    if (Utils.isString(date)) {
      // 解决 IOS 兼容问题
      date = new Date(date.replace(/-/g, '/'));
    }
    const dateSign = dateSignTemp ? dateSignTemp : "/";
    const timeSign = timeSignTemp ? timeSignTemp : ":";
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let dateFormat = "";
    if (type == "date") {
      dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign);
    } else if (type == "dateYM") {
      dateFormat = [year, month].map(Utils.formatNumber).join(dateSign);
    } else if (type == "time") {
      dateFormat = [hour, minute, second].map(Utils.formatNumber).join(timeSign);
    } else if (type == 'timeHM') {
      dateFormat = [hour, minute].map(Utils.formatNumber).join(timeSign);
    } else if (type == "datetime") {
      dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign) + " " + [hour, minute, second].map(Utils.formatNumber).join(timeSign);
    }
    return dateFormat;
  }

  /**
   * 格式化成两位数的数字
   */
  public static formatNumber = (n: number) => {
    const str = n.toString()
    return str[1] ? str : '0' + str
  }

  /**
   * 获取当前系统时间
   */
  public static getSystemDate(type: "date" | "dateYM" | "time" | "timeHM" | "datetime" = "date") {
    return Utils.formatTime(new Date(), type);
  }
}