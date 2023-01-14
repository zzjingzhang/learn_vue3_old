
// 通过interface定义索引类型

interface IndexLanguage {
    // 索引必须是number类型
    [index: number]: string
}

const frontLanguage: IndexLanguage = {
    0: 'HTML',
    1: 'CSS',
    2: 'jS',
    3: 'VUE',
    // 'abc':'abc'  // 会报错
}


interface ILanguageYear {
    [name: string]: number
}
const languageYear: ILanguageYear = {
    "c": 1972,
    "java": 1995,
    "js": 1996,
    "ts": 2014
}
console.log(languageYear)