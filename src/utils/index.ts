// 时间戳转化
export function capitalizeYear(timestamp: string, length?: number) {
  function add(m: number) {
    return m < 10 ? "0" + m : m
  }
  let time = new Date(parseInt(timestamp) * 1000)
  let y = time.getFullYear()
  let m = time.getMonth() + 1
  let d = time.getDate()
  let h = time.getHours()
  let mm = time.getMinutes()
  return length
    ? (y + "." + add(m) + "." + add(d) + " " + add(h) + ":" + add(mm)).slice(
        0,
        length
      )
    : y + "." + add(m) + "." + add(d) + " " + add(h) + ":" + add(mm)
}
