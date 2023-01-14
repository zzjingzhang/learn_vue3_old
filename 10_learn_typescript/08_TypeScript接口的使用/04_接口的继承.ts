

interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

// 接口的继承，支持多继承
interface IAction extends ISwim, IFly {

}

const action: IAction = {
    swimming() {
        console.log("swimming")
    },
    flying() {
        console.log('flying')
    }
}