const parseGoogleSheetJson = (rawData) => {
    try {
      const jsonString = rawData.replace(/^[^\(]*\(/, '').replace(/\);?$/, '');
      const parsed = JSON.parse(jsonString);
      const rows = parsed.table.rows;
  
      return rows.map((row) => {
        return row.c.map((cell) => (cell ? cell.v : null));
      });
    } catch (error) {
      console.error('Error parsing Google Sheets JSON:', error.message);
      return [];
    }
  };