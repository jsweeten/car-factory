

const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}

let chassis = createChassis()

const addWheels = (chassis) => {
    const ChassisWithWheels = chassis.wheels = 4
    return ChassisWithWheels
}

const addEngine = (chassis) => {
    const ChassisWithEngine = chassis.engine = "4.8L"
    return ChassisWithEngine
}

const addSteeringWheel = (chassis) => {
    const ChassisWithSteeringWheel = chassis.steeringWheel = "tilting"
    return ChassisWithSteeringWheel
}
const addBody = (chassis) => {
    const ChassisWithBody = chassis.body = "Fever"
    return ChassisWithBody
}

const addDriveTrain = (chassis) => {
    const ChassisWithDrivetrain = chassis.drivetrain = "Two wheel drive"
    return ChassisWithDrivetrain
}

const finalProduct = (chassis) => {
    const finishedCar = ""
    return finishedCar
}

// const finalProduct = ChassisWithDrivetrain(chassis)
// const createAChassis = createChassis()
// const addedWheels = addWheels(createAChassis)
// const addedEngine = addEngine(addedWheels)
// console.log(createAChassis)

addWheels(createChassis(chassis))
addEngine(addWheels(chassis))
addSteeringWheel(addEngine(chassis))
addBody(addSteeringWheel(chassis))
addDriveTrain(addBody(chassis))
finalProduct(addDriveTrain(chassis))


console.log(chassis)