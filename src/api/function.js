
/**
 * 处理时间戳的方法 将时间戳转换成对应的字符串
 * @param {*} time 传入的时间戳
 */
export const timeFormat = (time) => {
    const front =
        Math.floor((time / (1000 * 60)) % 60) >= 10
            ? Math.floor((time / (1000 * 60)) % 60)
            : '0' + Math.floor((time / (1000 * 60)) % 60)

    const back =
        Math.floor(
            (((time / (1000 * 60)) % 60) - Math.floor((time / (1000 * 60)) % 60)).toFixed(2) *
            60
        ) >= 10
            ? Math.floor(
                (((time / (1000 * 60)) % 60) - Math.floor((time / (1000 * 60)) % 60)).toFixed(
                    2
                ) * 60
            )
            : '0' +
            Math.floor(
                (((time / (1000 * 60)) % 60) - Math.floor((time / (1000 * 60)) % 60)).toFixed(
                    2
                ) * 60
            )

    return front + ':' + back;
}

