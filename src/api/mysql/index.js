import axios from '../axios'
import url from './url'
let mysql = axios.mysql

export default {
  // 查询数据
  select(params) {
    let sql = `select from ${params.from} `
    let keys = Object.keys(params.where)
    let values = Object.values(params.where)
    if (keys.length == 0) return mysql.post(url, sql)
    sql += `where `
    for (let i in keys) {
      sql += `${keys[i]}='${values[i]}' `
      if (i < keys.length - 1) sql += `and `
    }
    return mysql.post(url, sql)
  },
  // 插入数据
  insert(params) {
    let sql = `insert into ${params.into} `
    let keys = Object.keys(params.values)
    let values = Object.values(params.values)
    for (let i in keys) {
      if (i == 0) sql += `(`
      sql += `${keys[i]} `
      if (i < keys.length - 1) sql += `, `
      if (i == keys.length - 1) sql += `)`
    }
    sql += `values `
    for (let i in values) {
      if (i == 0) sql += `(`
      sql += `'${values[i]}' `
      if (i < keys.length - 1) sql += `, `
      if (i == keys.length - 1) sql += `)`
    }
    return mysql.post(url, sql)
  },
  // 删除数据
  delete(params) {
    let sql = `delete from ${params.from} `
    let keys = Object.keys(params.where)
    let values = Object.values(params.where)
    if (keys.length == 0) return mysql.post(url, sql)
    sql += `where `
    for (let i in keys) {
      sql += `${keys[i]}='${values[i]}' `
      if (i < keys.length - 1) sql += `and `
    }
    return mysql.post(url, sql)
  },
  // 更新数据
  update(params) {
    let sql = `update ${params.update} set `
    let keys = Object.keys(params.set)
    let values = Object.values(params.set)
    for (let i in keys) {
      sql += `${keys[i]}='${values[i]}' `
      if (i < keys.length - 1) sql += `, `
    }
    sql += `where `
    keys = Object.keys(params.where)
    values = Object.values(params.where)
    for (let i in keys) {
      sql += `${keys[i]}='${values[i]}' `
      if (i < keys.length - 1) sql += `and `
    }
    return mysql.post(url, sql)
  }
}
