
window.onload= function()
{
var vizDiv = document.getElementById("tableauViz");
var vizUrl = "http://public.tableau.com/views/padawan/SuperStoreJSAPI101";
 	var vizOptions = {
 		hideTabs: true,
		hideToolbar:  true,
 	};

  	viz = new tableauSoftware.Viz(vizDiv, vizUrl, vizOptions);     
    };

function vizFilter(filterName,filterValue,filterType)
{
  sheet=viz.getWorkbook().getActiveSheet();
  if(sheet.getSheetType() === 'worksheet') 
  {
    sheet.applyFilterAsync(filterName,filterValue,filterType); 
  }
  else
  {
    worksheetArray = sheet.getWorksheets();
    for(var i =0; i < worksheetArray.length; i++)
    {
      worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType); 
    }
  }
};

function clearFilters(filterName) 
{
  sheet=viz.getWorkbook().getActiveSheet();
  if(sheet.getSheetType() === 'worksheet') 
  {
    sheet.clearFilterAsync(filterName); 
  }
  else
  {
    worksheetArray = sheet.getWorksheets();
    for(var i =0; i < worksheetArray.length; i++)
    {
      worksheetArray[i].clearFilterAsync(filterName);
    }
  }
};

function switchView(sheetName)
{
  workBook = viz.getWorkbook();
  workBook.activateSheetAsync(sheetName);
};

