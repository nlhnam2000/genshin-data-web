import GenshinDB, {CombatTalentDetail} from 'genshin-db'
import {Cost} from 'interfaces/costs'

type CombatTalentDetailByLevel = {
    label: string,
    value: string | number | undefined
}

export const TalentDecoding = (attributes: CombatTalentDetail, level: number): CombatTalentDetailByLevel[] => {
    let result: CombatTalentDetailByLevel[] = []
    attributes.attributes.labels.forEach(item => {
        const label: string = item.split("|")[0]; 
        const str: string = item.split("|")[1]; 
        let params = []

        if (label.includes('Low/High Plunge DMG')) {
            params.push(str.substring(str.indexOf('{') + 1, str.indexOf('}')));
            params.push(str.substring(str.indexOf('/') + 2, str.lastIndexOf('}')));
          } else if (label.includes('+' || 'Charged Attack DMG')) {
            params.push(str.substring(str.indexOf('{') + 1, str.indexOf('}')));
            params.push(str.substring(str.indexOf('+') + 2, str.lastIndexOf('}')));
          } else {
            params.push(str.substring(str.indexOf('{') + 1, str.lastIndexOf('}')));
          }

          let paramsValue;

          if (params.length === 2) {
            paramsValue = params.reduce((el1, el2) => {
              let paramsName1 = el1.split(':')[0];
              let formattedSymbol1 = el1.split(':')[1];
              let paramsName2 = el2.split(':')[0];
              let formattedSymbol2 = el2.split(':')[1];
    
              return (
                attributeFormated(attributes.attributes.parameters[paramsName1][level - 1], formattedSymbol1) +
                ' / ' +
                attributeFormated(attributes.attributes.parameters[paramsName2][level - 1], formattedSymbol2)
              );
            });
          } else {
            let paramsName = params[0].split(':')[0];
            let paramsFormatedSymbol = params[0].split(':')[1];
            paramsValue = attributeFormated(
              attributes.attributes.parameters[paramsName][level - 1],
              paramsFormatedSymbol,
            );
          }
          result.push({
            label: label,
            value: paramsValue,
          });
    })

    return result
}

const attributeFormated = (value: number, formatter: string) => {
  if (formatter === 'F') {
    return value.toFixed(2);
  } else if (formatter === 'F1P') {
    return (value * 100).toFixed(1) + '%';
  } else if (formatter === 'P') {
    return (value * 100).toFixed(2) + '%';
  } else if (formatter === 'F1') {
    return value.toFixed(1);
  } else if (formatter === 'I') {
    return value;
  }
};

export const CalculateTotalAscension = (data: Cost) => {
  const ascension = ['ascend1', 'ascend2', 'ascend3', 'ascend4', 'ascend5', 'ascend6']
  type ObjectKey = keyof typeof data
  let result: GenshinDB.Items[] = []

  ascension.forEach(ascend => {
    const ascensionDetail = data[ascend as ObjectKey]
    for (let i = 0; i < ascensionDetail.length; i++) {
      const index = indexFromObject(result, ascensionDetail[i]); 
      if (index !== -1) {
        result[index] = {...result[index], count: result[index].count + ascensionDetail[i].count}
      }
      else {
        result.push(ascensionDetail[i])
      }
    }
  })
  
  return result; 
}

const indexFromObject = (parent: GenshinDB.Items[], child: GenshinDB.Items): number => {
  for (let i = 0; i < parent.length; i++) {
    if (parent[i].name === child.name) {
      return i;   
    }
  }

  return -1; 
}