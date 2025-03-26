export const csvToJson = (csv) => {
    const [header, ...rows] = csv.trim().split('\n').map(row => row.split(','));
  
    return rows.map(row => {
      return header.reduce((acc, key, index) => {
        acc[key.trim()] = row[index] ? row[index].trim() : null;
        return acc;
      }, {});
    });
  };
  