const ELSDLogs = false
const ELSDWriteIfnonExistent = true
const ELSDAutoParseItemValue = true
const ELSDPreventUndefinedValues = true

function EasyLocalStorageData(
    action = "r",
    item = "",
    content = undefined,
    logs = ELSDLogs,
    preventUndefinedValues = ELSDPreventUndefinedValues,
    writeIfnonExistent = ELSDWriteIfnonExistent,
    autoParseItemValue = ELSDAutoParseItemValue,
) {

    const actionLower = action.toLowerCase()

    if (
        actionLower === "read" ||
        actionLower === "r" ||
        actionLower === "get" ||
        actionLower === "getitem"
    ) {

        const storedItem = localStorage.getItem(item)
        if (storedItem !== null) {
            if (autoParseItemValue) {
                const parsedItem = JSON.parse(storedItem)

                if (preventUndefinedValues && parsedItem === undefined) {
                    return content
                }

                return parsedItem
            } else {
                return storedItem
            }
        }

        if (writeIfnonExistent) {
            if (preventUndefinedValues && content === undefined) {
                return null
            }

            localStorage.setItem(item, JSON.stringify(content))
            return content
        }

        logs && console.log(
            `ELSD: The item ${item} was not found. ` + `${writeIfnonExistent ? "Writing it in instead." : "Returning an undefined value instead."}`
        )
        if (writeIfnonExistent) {
            localStorage.setItem(item, JSON.stringify(content))
            return content
        }

        return undefined
    }

    if (
        actionLower === "write" ||
        actionLower === "w" ||
        actionLower === "set" ||
        actionLower === "setitem"
    ) {


        try {
            if (preventUndefinedValues && content === undefined) {
                console.log(`ELSD:  ${item} was NOT written as the default content format (${content}) because the preventUndefinedValues setting was enabled.`)
                return localStorage.getItem(item)
            } else {
                localStorage.setItem(item, JSON.stringify(content))
                if(logs == true){
                    console.log(`ELSD: The item ${item} was written as ${content}.`)
                }
            }
        } catch (error) {
            console.error(
                `ELSD: The item ${item} could not be written.`
            )
            console.error(error)
        }
    }
}

export default EasyLocalStorageData