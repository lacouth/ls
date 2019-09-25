function createTable(rows, cols, text='') {
  // TODO
  let table = ''
  let final
  text = text==''? '':text+' '  
  for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
      final = j==cols ? '\n' : ' ' 
      
      table+=text + i.toString()+'.'+j.toString()+final
    }
  }
  return table
}

function createTableHTML(rows, cols, text) {
  // TODO
  let table = '<table>\n'
  let final
  text = text==''? '':text+' '  
  for(let i=1;i<=rows;i++){
    table+='  <tr>\n'
    for(let j=1;j<=cols;j++){
      table+='    <td>'+i.toString()+'.'+j.toString()+'</td>\n'
    }
    table+='  </tr>\n'
  }
  table+='</table>\n'
  return table
}

export { createTable, createTableHTML };
