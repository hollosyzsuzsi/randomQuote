export const randomColor = () => {

    let color = '#000000'

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const createRandomColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        color = hexColor
    }

    createRandomColor()

    return color;
}

