define({"oj-message":{fatal:"Krytyczny",error:"Błąd",warning:"Ostrzeżenie",info:"Informacja",confirmation:"Potwierdzenie","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Wartość nie ma oczekiwanego formatu.",detail:"Proszę podać wartość w oczekiwanym formacie.","plural-separator":", ",hint:{summary:"Przykład: {exampleValue}",detail:"Należy ponowić próbę, używając formatu podobnego do następującego: {exampleValue}.","detail-plural":"Należy podać wartość w następujących formatach: {exampleValue}."},optionHint:{detail:'Akceptowaną wartością opcji "{propertyName}" jest "{propertyValueValid}"',"detail-plural":'Akceptowanymi wartościami opcji "{propertyName}" są "{propertyValueValid}"'},optionTypesMismatch:{summary:'Gdy opcja "{propertyName}" jest ustawiona na "{propertyValue}", trzeba podać wartość opcji "{requiredPropertyName}".'},optionTypeInvalid:{summary:'Nie podano wartości oczekiwanego typu dla opcji "{propertyName}".'},optionOutOfRange:{summary:'Wartość {propertyValue} jest spoza zakresu dla opcji "{propertyName}".'},optionValueInvalid:{summary:'Podano niepoprawną wartość "{propertyValue}" opcji "{propertyName}".'},number:{decimalFormatMismatch:{summary:"Podana wartość nie jest w oczekiwanym formacie liczbowym."},shortLongUnsupportedParse:{summary:'Typy "short" i "long" nie są obsługiwane przy analizie składniowej konwertera.',detail:"Proszę zmienić składnik na tylko do odczytu (readonly). Dla pól tylko do odczytu nie jest wywoływana funkcja analizy składniowej (parse) konwertera."},currencyFormatMismatch:{summary:"Podana wartość nie jest w oczekiwanym formacie waluty."},percentFormatMismatch:{summary:"Podana wartość nie jest w oczekiwanym formacie procentu."},invalidNumberFormat:{summary:"Podana wartość nie jest poprawną liczbą.",detail:"Proszę podać poprawną liczbę."},parseError:{detail:"Proszę wprowadzić liczbę."}},color:{invalidFormat:{summary:"Niepoprawny format koloru.",detail:"Niepoprawna specyfikacja opcji formatu koloru."},invalidSyntax:{summary:"Niepoprawna specyfikacja koloru.",detail:"Proszę podać wartość koloru, która będzie zgodna ze standardem CSS3."}},datetime:{datetimeOutOfRange:{summary:'Wartość "{value}" jest spoza zakresu dla opcji "{propertyName}".',detail:"Proszę podać wartość z przedziału od {minValue} do {maxValue}.",hour:"godz.",minute:"min",second:"s",millisec:"ms",month:"mies.",day:"dzień",year:"rok","month name":"nazwa miesiąca",weekday:"dzień roboczy"},dateFormatMismatch:{summary:"Podana wartość nie jest w oczekiwanym formacie daty."},invalidTimeZoneID:{summary:"Podano niepoprawny ID {timeZoneID} strefy czasowej."},nonExistingTime:{summary:"Godzina wejściowa nie istnieje, ponieważ przypada podczas zmiany czasu z zimowego na letni."},missingTimeZoneData:{summary:"Brak danych dotyczących strefy czasowej. Aby je załadować, proszę wywołać: require 'ojs/ojtimezonedata'."},timeFormatMismatch:{summary:"Podana wartość nie jest w oczekiwanym formacie godziny."},datetimeFormatMismatch:{summary:"Podana wartość nie jest w oczekiwanym formacie daty i godziny."},dateToWeekdayMismatch:{summary:'Dzień "{date}" nie przypada w "{weekday}".',detail:"Proszę podać dzień tygodnia odpowiadający dacie."},invalidISOString:{invalidRangeSummary:'Wartość "{value}" (w napisie "{isoStr}" w formacie ISO 8601) jest spoza zakresu dla pola "{propertyName}".',summary:'Podana wartość napisowa "{isoStr}" nie jest poprawną wartością napisową, zgodną ze standardem ISO 8601.',detail:"Proszę podać poprawną wartością napisową, zgodną ze standardem ISO 8601."}}},"oj-validator":{length:{hint:{min:"Proszę podać {min} lub więcej znaków.",max:"Proszę podać {max} lub mniej znaków.",inRange:"Proszę podać od {min} do {max} znaków.",exact:"Proszę podać {length} znaki(-ów)."},messageDetail:{tooShort:"Proszę podać {min} lub więcej znaków.",tooLong:"Proszę podać nie więcej niż {max} znaki(-ów)."},messageSummary:{tooShort:"Jest za mało znaków.",tooLong:"Jest zbyt wiele znaków."}},range:{number:{hint:{min:"Proszę podać liczbę większą lub równą {min}.",max:"Proszę podać liczbę mniejszą lub równą {max}.",inRange:"Proszę wprowadzić liczbę z przedziału od {min} do {max}.",exact:"Proszę wprowadzić liczbę {num}."},messageDetail:{rangeUnderflow:"Należy wprowadzić liczbę {min} lub większą.",rangeOverflow:"Należy wprowadzić liczbę {max} lub mniejszą.",exact:"Proszę wprowadzić liczbę {num}."},messageSummary:{rangeUnderflow:"Liczba jest za mała.",rangeOverflow:"Liczba jest zbyt duża."}},datetime:{hint:{min:"Proszę podać datę i godzinę przypadającą {min} lub później.",max:"Proszę podać datę i godzinę przypadającą {max} lub wcześniej.",inRange:"Proszę podać datę i godzinę przypadającą między {min} a {max}."},messageDetail:{rangeUnderflow:"Należy wprowadzić datę i godzinę przypadającą {min} lub później.",rangeOverflow:"Należy wprowadzić datę i godzinę przypadającą {max} lub wcześniej."},messageSummary:{rangeUnderflow:"Data i godzina przypadają przed datą i godziną minimalną.",rangeOverflow:"Data i godzina przypadają po dacie i godzinie maksymalnej."}},date:{hint:{min:"Proszę podać datę {min} lub późniejszą.",max:"Proszę podać datę {max} lub wcześniejszą.",inRange:"Proszę podać datę między {min} a {max}."},messageDetail:{rangeUnderflow:"Należy wprowadzić datę {min} lub późniejszą.",rangeOverflow:"Należy wprowadzić datę {max} lub wcześniejszą."},messageSummary:{rangeUnderflow:"Data przypada przed datą minimalną.",rangeOverflow:"Data przypada do dacie maksymalnej."}},time:{hint:{min:"Proszę podać godzinę {min} lub późniejszą.",max:"Proszę podać godzinę {max} lub wcześniejszą.",inRange:"Proszę podać godzinę między {min} a {max}."},messageDetail:{rangeUnderflow:"Należy wprowadzić godzinę {min} lub późniejszą.",rangeOverflow:"Należy wprowadzić godzinę {max} lub wcześniejszą."},messageSummary:{rangeUnderflow:"Godzina przypada przed godziną minimalną.",rangeOverflow:"Godzina przypada po godzinie maksymalnej."}}},restriction:{date:{messageSummary:"Data {value} pochodzi z wyłączonego wpisu.",messageDetail:"Wybrana data jest niedostępna. Proszę spróbować wybrać inną datę."}},regExp:{summary:"Niepoprawny format.",detail:"Proszę wprowadzić dopuszczalne wartości, opisane w tym wyrażeniu regularnym: {pattern}."},required:{summary:"Wartość jest wymagana.",detail:"Proszę wprowadzić wartość."}},"oj-ojEditableValue":{loading:"Ładowanie",requiredText:"Wymagane",helpSourceText:"Więcej informacji..."},"oj-ojInputDate":{done:"Gotowe",cancel:"Anuluj",time:"Godzina",accessibleClearIconAltText:"Wyczyść dane wejściowe",prevText:"Poprzednia",nextText:"Nast.",currentText:"Dzisiaj",weekHeader:"Tydz.",tooltipCalendar:"Wybór daty.",tooltipCalendarTime:"Wybór daty i godziny.",tooltipCalendarDisabled:"Wybór daty wyłączony.",tooltipCalendarTimeDisabled:"Wybór daty i godziny wyłączony.",picker:"Selektor",weekText:"Tydzień",datePicker:"Selektor daty",inputHelp:"Aby uzyskać dostęp do kalendarza, proszę nacisnąć klawisz ze strzałką w dół lub w górę.",inputHelpBoth:"Aby uzyskać dostęp do kalendarza, proszę nacisnąć klawisz ze strzałką w dół lub w górę; aby uzyskać dostęp do rozwijanej listy godzin -  klawisz Shift + klawisz ze strzałką w dół lub w górę.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Przekroczono maksymalną długość: {len}.",accessibleMaxLengthRemaining:"Pozostało znaków: {chars}.",regexp:{messageSummary:"",messageDetail:""},required:{hint:""}},"oj-ojInputTime":{accessibleClearIconAltText:"Wyczyść dane wejściowe",cancelText:"Anuluj",okText:"OK",currentTimeText:"Teraz",hourWheelLabel:"Godzina",minuteWheelLabel:"Minuta",ampmWheelLabel:"AMPM",tooltipTime:"Wybór godziny.",tooltipTimeDisabled:"Wybór godziny wyłączony.",inputHelp:"Aby uzyskać dostęp do rozwijanej listy godzin, proszę nacisnąć klawisz ze strzałką w dół lub w górę.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Przekroczono maksymalną długość: {len}.",accessibleMaxLengthRemaining:"Pozostało znaków: {chars}."},"oj-ojInputText":{accessibleClearIcon:"Wyczyść"},"oj-ojInputPassword":{regexp:{messageDetail:"Wartość musi być zgodna z tym wzorcem: {pattern}"},accessibleShowPassword:"Pokaż hasło.",accessibleHidePassword:"Ukryj hasło."},"oj-ojFilmStrip":{labelAccFilmStrip:"Wyświetlanie strony {pageIndex} z {pageCount}",labelAccArrowNextPage:'Aby wyświetlić następną stronę, proszę nacisnąć przycisk "Następna"',labelAccArrowPreviousPage:'Aby wyświetlić poprzednią stronę, proszę nacisnąć przycisk "Poprzednia"',tipArrowNextPage:"Następna",tipArrowPreviousPage:"Poprzednia"},"oj-ojDataGrid":{accessibleSortAscending:"{id} posortowano w porządku rosnącym",accessibleSortDescending:"{id} posortowano w porządku malejącym",accessibleSortable:"{id} - sortowalne",accessibleActionableMode:"Wejście do trybu z wykonywaniem czynności.",accessibleNavigationMode:"Proszę wejść do trybu nawigacji, po czym - aby przejść do trybu edycji lub wykonywania czynności - nacisnąć klawisz F2.",accessibleEditableMode:"Proszę wejść do trybu edycji, po czym - aby przejść poza tabelę danych - nacisnąć klawisz Escape.",accessibleSummaryExact:"To jest tabela danych z {rownum} wierszami i {colnum} kolumnami",accessibleSummaryEstimate:"To jest tabela danych z nieznaną liczbą wierszy i <#colnum> kolumn",accessibleSummaryExpanded:"Liczba obecnie rozwiniętych wierszy wynosi {num}",accessibleRowExpanded:"Wiersz rozwinięty",accessibleExpanded:"Rozwinięte",accessibleRowCollapsed:"Wiersz zwinięty",accessibleCollapsed:"Zwinięte",accessibleRowSelected:"Wybrany wiersz {row}",accessibleColumnSelected:"Wybrana kolumna {column}",accessibleStateSelected:"wybrane",accessibleMultiCellSelected:"Liczba wybranych kolumn wynosi {num}",accessibleColumnSpanContext:"Szerokość {extent}",accessibleRowSpanContext:"Wysokość {extent}",accessibleRowContext:"Wiersz {index}",accessibleColumnContext:"Kolumna {index}",accessibleRowHeaderContext:"Nagłówek {index} wiersza",accessibleColumnHeaderContext:"Nagłówek {index} kolumny",accessibleRowEndHeaderContext:"Końcowy nagłówek {index} wiersza",accessibleColumnEndHeaderContext:"Końcowy nagłówek {index} kolumny",accessibleRowHeaderLabelContext:"Etykieta nagłówka wiersza - poziom {level}",accessibleColumnHeaderLabelContext:"Etykieta nagłówka kolumny - poziom {level}",accessibleRowEndHeaderLabelContext:"Etykieta nagłówka wiersza końcowego - poziom {level}",accessibleColumnEndHeaderLabelContext:"Etykieta nagłówka kolumny końcowej - poziom {level}",accessibleLevelContext:"Poziom {level}",accessibleRangeSelectModeOn:"Tryb dodawania wybranego zakresu komórek włączony.",accessibleRangeSelectModeOff:"Tryb dodawania wybranego zakresu komórek wyłączony.",accessibleFirstRow:"Osiągnięto pierwszy wiersz.",accessibleLastRow:"Osiągnięto ostatni wiersz.",accessibleFirstColumn:"Osiągnięto pierwszą kolumnę",accessibleLastColumn:"Osiągnięto ostatnią kolumnę.",accessibleSelectionAffordanceTop:"Górny uchwyt wyboru.",accessibleSelectionAffordanceBottom:"Dolny uchwyt wyboru.",accessibleLevelHierarchicalContext:"Poziom {level}",accessibleRowHierarchicalFull:"Wiersz {posInSet} z {setSize} wierszy",accessibleRowHierarchicalPartial:"Wiersz {posInSet} z przynajmniej {setSize} wierszy",accessibleRowHierarchicalUnknown:"Przynajmniej wiersz {posInSet} z przynajmniej {setSize} wierszy",accessibleColumnHierarchicalFull:"Kolumna {posInSet} z {setSize} kolumn",accessibleColumnHierarchicalPartial:"Kolumna {posInSet} z przynajmniej {setSize} kolumn",accessibleColumnHierarchicalUnknown:"Przynajmniej kolumna {posInSet} z przynajmniej {setSize} kolumn",msgFetchingData:"Pobieranie danych...",msgNoData:"Brak elementów do wyświetlenia.",msgReadOnly:"Ta komórka jest tylko do odczytu i nie można jej edytować.",labelHideColumns:"Ukryj kolumny",labelHideRows:"Ukryj wiersze",labelUnhideColumns:"Odkryj kolumny",labelUnhideRows:"Odkryj wiersze",labelResize:"Zmień rozmiar",labelResizeWidth:"Zmień rozmiar: szerokość",labelResizeHeight:"Zmień rozmiar: wysokość",labelSortAsc:"Sortuj rosnąco",labelSortDsc:"Sortuj malejąco",labelSortRow:"Sortuj wiersz",labelSortRowAsc:"Sortuj wiersz rosnąco",labelSortRowDsc:"Sortuj wiersz malejąco",labelSortCol:"Sortuj kolumnę",labelSortColAsc:"Sortuj kolumnę rosnąco",labelSortColDsc:"Sortuj kolumnę malejąco",labelFilter:"Filtr",labelFilterCol:"Kolumna filtrowania",labelCut:"Wytnij",labelPaste:"Wklej",labelCutCells:"Wytnij",labelPasteCells:"Wklej",labelCopyCells:"Kopiuj",labelAutoFill:"Automatyczne wypełnianie",labelEnableNonContiguous:"Włącz wybór nieciągły",labelDisableNonContiguous:"Wyłącz wybór nieciągły",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Anuluj",accessibleContainsControls:"Zawiera formanty",labelSelectMultiple:"Wybierz wiele",labelResizeDialogApply:"Zastosuj",labelResizeFitToContent:"Dopasuj rozmiar",columnWidth:"Szerokość (w pikselach)",rowHeight:"Wysokość (w pikselach)",labelResizeColumn:"Zmień rozmiar kolumny",labelResizeRow:"Zmień rozmiar wiersza",resizeColumnDialog:"Zmienianie rozmiaru kolumny",resizeRowDialog:"Zmienianie rozmiaru wiersza",labelFreezeRow:"Zamroź wiersze",labelFreezeCol:"Zamroź kolumny",labelUnfreezeRow:"Odmroź wiersze",labelUnfreezeCol:"Odmroź kolumny",collapsedText:"Zwiń",expandedText:"Rozwiń",tooltipRequired:"Wymagane"},"oj-ojRowExpander":{accessibleLevelDescription:"Poziom {level}",accessibleRowDescription:"Poziom {level}, wiersz {num} z {total}",accessibleRowDescriptionAtLeast:"Poziom {level}, wiersz {num} z co najmniej {total}",accessibleRowExpanded:"Wiersz rozwinięty",accessibleRowCollapsed:"Wiersz zwinięty",accessibleStateExpanded:"rozwinięte",accessibleStateCollapsed:"zwinięte"},"oj-ojStreamList":{msgFetchingData:"Pobieranie danych..."},"oj-ojListView":{msgFetchingData:"Pobieranie danych...",msgNoData:"Brak elementów do wyświetlenia.",msgItemsAppended:"Na końcu dodano {count} elementy(-ów).",msgFetchCompleted:"Pobrano wszystkie elementy.",indexerCharacters:"A|Ą|B|C|Ć|D|E|Ę|F|G|H|I|J|K|L|Ł|M|N|Ń|O|Ó|P|Q|R|S|Ś|T|U|V|W|X|Y|Z|Ż|Ź",accessibleExpandCollapseInstructionText:"Do rozwijania i zwijania proszę używać klawiszy ze strzałkami.",accessibleGroupExpand:"Rozwinięte",accessibleGroupCollapse:"Zwinięte",accessibleReorderTouchInstructionText:"Proszę dwukrotnie stuknąć i przytrzymać. Następnie proszę poczekać na dźwięk, po czym przeciągnąć w celu zmiany uporządkowania.",accessibleReorderBeforeItem:"Przed {item}",accessibleReorderAfterItem:"Po {item}",accessibleReorderInsideItem:"Do {item}",accessibleNavigateSkipItems:"Pomijanie {numSkip} elementów",accessibleSuggestion:"Sugestia",labelCut:"Wytnij",labelCopy:"Kopiuj",labelPaste:"Wklej",labelPasteBefore:"Wklej przed",labelPasteAfter:"Wklej po"},"oj-ojWaterfallLayout":{msgFetchingData:"Pobieranie danych..."},"oj-_ojLabel":{tooltipHelp:"Pomoc",tooltipRequired:"Wymagane"},"oj-ojLabel":{tooltipHelp:"Pomoc",tooltipRequired:"Wymagane"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Zmniejszenie",tooltipIncrement:"Przyrost"},"oj-ojTable":{accessibleAddRow:"Aby dodać nowy wiersz, proszę wprowadzić dane.",accessibleColumnContext:"Kolumna {index}",accessibleColumnFooterContext:"Stopka {index} kolumny",accessibleColumnHeaderContext:"Nagłówek {index} kolumny",accessibleContainsControls:"Zawiera formanty",accessibleColumnsSpan:"Obejmuje {count} kolumn(y)",accessibleEditableSummary:"Aby ustawić fokus na formantach tylko do odczytu, proszę nacisnąć klawisz F2; aby zacząć edytować - klawisz Enter",accessibleRowContext:"Wiersz {index}",accessibleSortable:"{id} - sortowalne",accessibleSortAscending:"{id} posortowano w porządku rosnącym",accessibleSortDescending:"{id} posortowano w porządku malejącym",accessibleStateSelected:"wybrane",accessibleStateUnselected:"niewybrane",accessibleSummaryEstimate:"Tabela z {colnum} kolumnami i ponad {rownum} wierszami",accessibleSummaryExact:"Tabela z {colnum} kolumnami i {rownum} wierszami",labelAccSelectionAffordanceTop:"Górny uchwyt wyboru",labelAccSelectionAffordanceBottom:"Dolny uchwyt wyboru",labelEnableNonContiguousSelection:"Włącz wybór nieciągły",labelDisableNonContiguousSelection:"Wyłącz wybór nieciągły",labelResize:"Zmień rozmiar",labelResizeColumn:"Zmień rozmiar kolumny",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Anuluj",labelResizePopupSpinner:"Zmień rozmiar kolumny",labelResizeColumnDialog:"Zmienianie rozmiaru kolumny",labelColumnWidth:"Szerokość (w pikselach)",labelResizeDialogApply:"Zastosuj",labelSelectRow:"Wybór wiersza",labelSelectAllRows:"Wybór wszystkich wierszy",labelEditRow:"Edycja wiersza",labelSelectAndEditRow:"Wybór i edycja wiersza",labelSelectColumn:"Wybór kolumny",labelSort:"Sortuj",labelSortAsc:"Sortuj rosnąco",labelSortDsc:"Sortuj malejąco",msgFetchingData:"Pobieranie danych...",msgNoData:"Brak danych do wyświetlenia.",msgInitializing:"Inicjalizowanie...",msgColumnResizeWidthValidation:"Wartość określająca szerokość musi być liczbą całkowitą.",msgScrollPolicyMaxCountSummary:"Przekroczono maksymalną liczbę wierszy dla przewijania tabeli.",msgScrollPolicyMaxCountDetail:"Proszę ponownie załadować z mniejszym zbiorem danych.",msgStatusSortAscending:"{0} posortowano w porządku rosnącym.",msgStatusSortDescending:"{0} posortowano w porządku malejącym.",tooltipRequired:"Wymagane"},"oj-ojTabs":{labelCut:"Wytnij",labelPasteBefore:"Wklej przed",labelPasteAfter:"Wklej po",labelRemove:"Usuń",labelReorder:"Zmień kolejność",removeCueText:"Możliwe do usunięcia"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Proszę wybrać wartość."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Proszę wybrać wartość."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Proszę wybrać wartość."},searchField:"Pole wyszukiwania",noMatchesFound:"Nie znaleziono zgodnych",noMoreResults:"Nie ma więcej wyników",oneMatchesFound:"Znaleziono zgodnych: 1",moreMatchesFound:"Znaleziono zgodnych: {num}",filterFurther:"Dostępnych jest więcej wyników; proszę dalej filtrować."},"oj-ojSwitch":{SwitchON:"Wł.",SwitchOFF:"Wył."},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nie znaleziono zgodnych",noMoreResults:"Nie ma więcej wyników",oneMatchesFound:"Znaleziono zgodnych: 1",moreMatchesFound:"Znaleziono zgodnych: {num}",filterFurther:"Dostępnych jest więcej wyników; proszę dalej filtrować."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Proszę wybrać wartość."},noMatchesFound:"Nie znaleziono zgodnych",oneMatchFound:"Znaleziono zgodnych: 1",multipleMatchesFound:"Znaleziono zgodnych: {num}",nOrMoreMatchesFound:"Znaleziono zgodnych: {num} lub więcej",cancel:"Anuluj",labelAccOpenDropdown:"rozwiń",labelAccClearValue:"wyczyść wartość",noResultsLine1:"Brak wyników",noResultsLine2:"Nie znaleziono niczego spełniającego kryteria wyszukiwania."},"oj-ojInputSearch2":{cancel:"Anuluj",noSuggestionsFound:"Nie znaleziono propozycji"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nie znaleziono zgodnych",oneMatchesFound:"Znaleziono zgodnych: 1",moreMatchesFound:"Znaleziono zgodnych: {num}"},"oj-ojTreeView":{treeViewSelectorAria:"Selektor widoku drzewa ({rowKey})",retrievingDataAria:"Pobieranie danych dla wiersza: {nodeText}",receivedDataAria:"Pobrano dane dla wiersza: {nodeText}"},"oj-ojTree":{stateLoading:"Ładowanie...",labelNewNode:"Nowy węzeł",labelMultiSelection:"Wybór wielokrotny",labelEdit:"Edytuj",labelCreate:"Utwórz",labelCut:"Wytnij",labelCopy:"Kopiuj",labelPaste:"Wklej",labelPasteAfter:"Wklej po",labelPasteBefore:"Wklej przed",labelRemove:"Usuń",labelRename:"Zmień nazwę",labelNoData:"Brak danych"},"oj-ojPagingControl":{labelAccPaging:"Paginacja",labelAccPageNumber:"Załadowano zawartość strony {pageNum}",labelAccNavFirstPage:"Pierwsza strona",labelAccNavLastPage:"Ostatnia strona",labelAccNavNextPage:"Następna strona",labelAccNavPreviousPage:"Poprzednia strona",labelAccNavPage:"Strona",labelLoadMore:"Pokaż więcej...",labelLoadMoreMaxRows:"Osiągnięto maksymalny limit {maxRows} wierszy.",labelNavInputPage:"Strona",labelNavInputPageMax:"z {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} z {pageMax} elementów",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} z co najmniej {pageMax} elementów",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} z około {pageMax} elementów",msgItemRangeNoTotal:"Elementy: {pageFrom}-{pageTo}",fullMsgItem:"{pageTo} z {pageMax} elementów",fullMsgItemAtLeast:"{pageTo} z co najmniej {pageMax} elementów",fullMsgItemApprox:"{pageTo} z około {pageMax} elementów",msgItemNoTotal:"{pageTo}: elementy",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"z",msgItemRangeOfAtLeast:"z co najmniej",msgItemRangeOfApprox:"z około",msgItemRangeItems:"elementy(-ów)",tipNavInputPage:"Idź do strony",tipNavPageLink:"Idź do strony {pageNum}",tipNavNextPage:"Następna",tipNavPreviousPage:"Poprzednia",tipNavFirstPage:"Pierwsza",tipNavLastPage:"Ostatnia",pageInvalid:{summary:"Podana wartość strony jest niepoprawna.",detail:"Proszę podać wartość większą niż 0."},maxPageLinksInvalid:{summary:"Wartość maxPageLinks jest niepoprawna.",detail:"Proszę podać wartość większą niż 4."}},"oj-ojMasonryLayout":{labelCut:"Wytnij",labelPasteBefore:"Wklej przed",labelPasteAfter:"Wklej po"},"oj-panel":{labelAccButtonExpand:"Rozwiń",labelAccButtonCollapse:"Zwiń",labelAccButtonRemove:"Usuń",labelAccFlipForward:"Przerzuć do przodu",labelAccFlipBack:"Przerzuć wstecz",tipDragToReorder:"Proszę przeciągnąć, aby zmienić kolejność",labelAccDragToReorder:"Aby zmienić kolejność, proszę przeciągnąć; jest dostępne menu kontekstowe"},"oj-ojChart":{labelDefaultGroupName:"Grupa {0}",labelSeries:"Seria",labelGroup:"Grupa",labelDate:"Data",labelValue:"Wartość",labelTargetValue:"Cel",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Procent",labelLow:"Minimum",labelHigh:"Maksimum",labelOpen:"Otwarcie",labelClose:"Zamknięcie",labelVolume:"Wolumen",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Maks.",labelOther:"Inne",tooltipPan:"Panoramowanie",tooltipSelect:"Zaznaczanie obszaru",tooltipZoom:"Powiększanie obszaru",stateLoading:"Ładowanie",stateLoaded:"Załadowano",componentName:"Wykres"},"oj-dvtBaseGauge":{componentName:"Miernik"},"oj-ojDiagram":{promotedLink:"Łącze: {0}",promotedLinks:"Łącza: {0}",promotedLinkAriaDesc:"Pośrednie",componentName:"Diagram"},"oj-ojGantt":{componentName:"Wykres Gantta",accessibleDurationDays:"{0} dni",accessibleDurationHours:"{0} godz.",accessibleTaskInfo:"Godzina początkowa: {0}, godzina końcowa: {1}, czas trwania: {2}",accessibleMilestoneInfo:"Czas: {0}",accessibleRowInfo:"Wiersz: {0}",accessibleTaskTypeMilestone:"Ważny etap",accessibleTaskTypeSummary:"Podsumowanie",accessiblePredecessorInfo:"Poprzedniki: {0}",accessibleSuccessorInfo:"Następniki: {0}",accessibleDependencyInfo:'Typ zależności "{0}"; łączy "{1}" z "{2}"',startStartDependencyAriaDesc:"początek z początkiem",startFinishDependencyAriaDesc:"początek z końcem",finishStartDependencyAriaDesc:"koniec z początkiem",finishFinishDependencyAriaDesc:"koniec z końcem",tooltipZoomIn:"Powiększ",tooltipZoomOut:"Pomniejsz",labelLevel:"Poziom",labelRow:"Wiersz",labelStart:"Początek",labelEnd:"Koniec",labelDate:"Data",labelBaselineStart:"Początek planu bazowego",labelBaselineEnd:"Koniec planu bazowego",labelBaselineDate:"Data planu bazowego",labelDowntimeStart:"Początek przestoju",labelDowntimeEnd:"Koniec przestoju",labelOvertimeStart:"Początek nadgodzin",labelOvertimeEnd:"Koniec nadgodzin",labelAttribute:"Atrybut",labelLabel:"Etykieta",labelProgress:"Postęp",labelMoveBy:"Przenieś o",labelResizeBy:"Zmień rozmiar o",taskMoveInitiated:"Zainicjowano przenoszenie zadania",rowAxisLabel:"Etykiety wierszy",taskResizeEndInitiated:"Zainicjowano zakończenie zmiany rozmiaru zadania",taskResizeStartInitiated:"Zainicjowano rozpoczęcie zmiany rozmiaru zadania",taskMoveSelectionInfo:"Inne wybrane ({0})",taskResizeSelectionInfo:"Inne wybrane ({0})",taskMoveInitiatedInstruction:"Do przeniesienia proszę używać klawiszy ze strzałkami",taskResizeInitiatedInstruction:"Do zmiany rozmiaru proszę używać klawiszy ze strzałkami",taskMoveFinalized:"Zakończono przenoszenie zadania",taskResizeFinalized:"Zakończono zmienianie rozmiaru zadania",taskMoveCancelled:"Anulowano przenoszenie zadania",taskResizeCancelled:"Anulowano zmienianie rozmiaru zadania",taskResizeStartHandle:"Uchwyt rozpoczęcia zmiany rozmiaru zadania",taskResizeEndHandle:"Uchwyt zakończenia zmiany rozmiaru zadania"},"oj-ojLegend":{componentName:"Legenda",tooltipExpand:"Rozwiń",tooltipCollapse:"Zwiń",labelInvalidData:"Niepoprawne dane",labelNoData:"Brak danych do wyświetlenia",labelClearSelection:"Wyczyść wybór",stateSelected:"Wybrane",stateUnselected:"Niewybrane",stateMaximized:"Zmaksymalizowane",stateMinimized:"Zminimalizowane",stateIsolated:"Izolowane",labelCountWithTotal:"{0} z {1}",accessibleContainsControls:"Zawiera formanty"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Inne",labelGroup:"Grupa",labelSize:"Rozmiar",labelAdditionalData:"Dodatkowe dane",componentName:"{0}-polowy"},"oj-ojPictoChart":{componentName:"Wykres obrazkowy"},"oj-ojSparkChart":{componentName:"Wykres"},"oj-ojSunburst":{labelColor:"Kolor",labelSize:"Rozmiar",tooltipExpand:"Rozwiń",tooltipCollapse:"Zwiń",stateLoading:"Ładowanie",stateLoaded:"Załadowano",componentName:"Wykres pierścieniowy"},"oj-ojTagCloud":{componentName:"Chmura znaczników",accessibleContainsControls:"Zawiera formanty",labelCountWithTotal:"{0} z {1}",labelInvalidData:"Niepoprawne dane",stateCollapsed:"Zwinięte",stateDrillable:"Możliwe do drążenia",stateExpanded:"Rozwinięte",stateIsolated:"Izolowane",stateHidden:"Ukryte",stateMaximized:"Zmaksymalizowane",stateMinimized:"Zminimalizowane",stateVisible:"Widoczne"},"oj-ojThematicMap":{componentName:"Mapa tematyczna",areasRegion:"Obszary",linksRegion:"Łącza",markersRegion:"Znaczniki"},"oj-ojTimeAxis":{componentName:"Oś czasu"},"oj-ojTimeline":{componentName:"Oś czasu",stateMinimized:"Zminimalizowane",stateMaximized:"Zmaksymalizowane",stateIsolated:"Izolowane",stateHidden:"Ukryte",stateExpanded:"Rozwinięte",stateVisible:"Widoczne",stateDrillable:"Możliwe do drążenia",stateCollapsed:"Zwinięte",labelCountWithTotal:"{0} z {1}",accessibleItemDesc:"Opis: {0}.",accessibleItemEnd:"Godzina zakończenia: {0}.",accessibleItemStart:"Godzina rozpoczęcia: {0}.",accessibleItemTitle:"Tytuł: {0}.",labelSeries:"Seria",tooltipZoomIn:"Powiększ",tooltipZoomOut:"Pomniejsz",labelStart:"Początek",labelEnd:"Koniec",labelAccNavNextPage:"Następna strona",labelAccNavPreviousPage:"Poprzednia strona",tipArrowNextPage:"Następna",tipArrowPreviousPage:"Poprzednia",navArrowDisabledState:"Wyłączone",labelDate:"Data",labelTitle:"Tytuł",labelDescription:"Opis",labelMoveBy:"Przenieś o",labelResizeBy:"Zmień rozmiar o",itemMoveInitiated:"Zainicjowano przenoszenie zdarzenia",itemResizeEndInitiated:"Zainicjowano zakończenie zmiany rozmiaru zdarzenia",itemResizeStartInitiated:"Zainicjowano rozpoczęcie zmiany rozmiaru zdarzenia",itemMoveSelectionInfo:"Inne wybrane ({0})",itemResizeSelectionInfo:"Inne wybrane ({0})",itemMoveInitiatedInstruction:"Do przeniesienia proszę używać klawiszy ze strzałkami",itemResizeInitiatedInstruction:"Do zmiany rozmiaru proszę używać klawiszy ze strzałkami",itemMoveFinalized:"Zakończono przenoszenie zdarzenia",itemResizeFinalized:"Zakończono zmienianie rozmiaru zdarzenia",itemMoveCancelled:"Anulowano przenoszenie zdarzenia",itemResizeCancelled:"Anulowano zmienianie rozmiaru zdarzenia",itemResizeStartHandle:"Uchwyt rozpoczęcia zmiany rozmiaru zdarzenia",itemResizeEndHandle:"Uchwyt zakończenia zmiany rozmiaru zdarzenia"},"oj-ojTreemap":{labelColor:"Kolor",labelSize:"Rozmiar",tooltipIsolate:"Izoluj",tooltipRestore:"Przywróć",stateLoading:"Ładowanie",stateLoaded:"Załadowano",componentName:"Mapa drzewa"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tys.",labelScalingSuffixMillion:"mln.",labelScalingSuffixBillion:"mld.",labelScalingSuffixTrillion:"bln.",labelScalingSuffixQuadrillion:"bld.",labelInvalidData:"Niepoprawne dane",labelNoData:"Brak danych do wyświetlenia",labelClearSelection:"Wyczyść wybór",labelDataVisualization:"Wizualizacja danych",stateSelected:"Wybrane",stateUnselected:"Niewybrane",stateMaximized:"Zmaksymalizowane",stateMinimized:"Zminimalizowane",stateExpanded:"Rozwinięte",stateCollapsed:"Zwinięte",stateIsolated:"Izolowane",stateHidden:"Ukryte",stateVisible:"Widoczne",stateDrillable:"Możliwe do drążenia",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} z {1}",accessibleContainsControls:"Zawiera formanty"},"oj-ojRatingGauge":{labelClearSelection:"Wyczyść wybór",stateSelected:"Wybrane",stateUnselected:"Niewybrane",stateMaximized:"Zmaksymalizowane",stateMinimized:"Zminimalizowane",stateExpanded:"Rozwinięte",stateCollapsed:"Zwinięte",stateIsolated:"Izolowane",stateHidden:"Ukryte",stateVisible:"Widoczne",stateDrillable:"Możliwe do drążenia",labelCountWithTotal:"{0} z {1}",accessibleContainsControls:"Zawiera formanty"},"oj-ojStatusMeterGauge":{labelClearSelection:"Wyczyść wybór",stateSelected:"Wybrane",stateUnselected:"Niewybrane",stateMaximized:"Zmaksymalizowane",stateMinimized:"Zminimalizowane",stateExpanded:"Rozwinięte",stateCollapsed:"Zwinięte",stateIsolated:"Izolowane",stateHidden:"Ukryte",stateVisible:"Widoczne",stateDrillable:"Możliwe do drążenia",labelCountWithTotal:"{0} z {1}",accessibleContainsControls:"Zawiera formanty"},"oj-ojNavigationList":{defaultRootLabel:"Lista nawigacyjna",hierMenuBtnLabel:'Przycisk "Menu hierarchiczne"',selectedLabel:"wybrane",previousIcon:"Poprzednia",msgFetchingData:"Pobieranie danych...",msgNoData:"",overflowItemLabel:"Więcej kart",accessibleReorderTouchInstructionText:"Proszę dwukrotnie stuknąć i przytrzymać. Następnie proszę poczekać na dźwięk, po czym przeciągnąć w celu zmiany uporządkowania.",accessibleReorderBeforeItem:"Przed {item}",accessibleReorderAfterItem:"Po {item}",labelCut:"Wytnij",labelPasteBefore:"Wklej przed",labelPasteAfter:"Wklej po",labelRemove:"Usuń",removeCueText:"Możliwe do usunięcia",accessibleExpandCollapseInstructionText:"Do rozwijania i zwijania proszę używać klawiszy ze strzałkami."},"oj-ojSlider":{noValue:"ojSlider nie ma wartości",maxMin:"Wartość maksymalna nie może być mniejsza niż minimalna ani jej równa",startEnd:"wartość value.start nie może być większa niż value.end",valueRange:"Wartość musi się zawierać między minimalną a maksymalną",optionNum:"Opcja {option} nie jest liczbą",invalidStep:"Niepoprawny krok; krok musi być > 0",lowerValueThumb:"suwak mniejszej wartości",higherValueThumb:"suwak większej wartości"},"oj-ojDialog":{labelCloseIcon:"Zamknięcie"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Wchodzenie do okna wyskakującego. Do przechodzenia między oknem wyskakującym a powiązanym formantem proszę używać klawisza F6.",ariaLiveRegionInitialFocusNone:"Okno wyskakujące otwarte. Do przechodzenia między oknem wyskakującym a powiązanym formantem proszę używać klawisza F6.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Wchodzenie do okna wyskakującego. Okno wyskakujące można zamknąć, przechodząc do ostatniego zawartego w nim łącza.",ariaLiveRegionInitialFocusNoneTouch:"Okno wyskakujące otwarte. Proszę przejść do następnego łącza, aby ustawić fokus w oknie wyskakującym.",ariaFocusSkipLink:"Aby przejść do otwartego okna wyskakującego, proszę dwa razy stuknąć.",ariaCloseSkipLink:"Aby zamknąć okno wyskakujące, proszę dwa razy stuknąć."},"oj-ojRefresher":{ariaRefreshLink:"Aby odświeżyć zawartość, proszę uaktywnić łącze",ariaRefreshingLink:"Odświeżanie zawartości",ariaRefreshCompleteLink:"Odświeżanie ukończono"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Pokaż czynności początkowe",ariaShowEndActionsDescription:"Pokaż czynności końcowe",ariaHideActionsDescription:"Ukryj czynności"},"oj-ojIndexer":{indexerCharacters:"A|Ą|B|C|Ć|D|E|Ę|F|G|H|I|J|K|L|Ł|M|N|Ń|O|Ó|P|Q|R|S|Ś|T|U|V|W|X|Y|Z|Ż|Ź",indexerOthers:"#",ariaDisabledLabel:"Brak zgodnego nagłówka grupy",ariaOthersLabel:"numer",ariaInBetweenText:"Między {first} a {second}",ariaKeyboardInstructionText:"Aby wybrać wartość, proszę nacisnąć klawisz Enter.",ariaTouchInstructionText:"Aby przełączyć się do trybu gestów, proszę 2x stuknąć i przytrzymać, a następnie - aby dostosować wartość - przeciągnąć w górę lub w dół."},"oj-ojMenu":{labelCancel:"Anuluj",ariaFocusSkipLink:"Fokus znajduje się w menu; aby przenieść fokus na pierwszą pozycję w menu, proszę stuknąć dwa razy albo przeciągnąć palcem."},"oj-ojColorSpectrum":{labelHue:"Odcień",labelOpacity:"Nieprzezroczystość",labelSatLum:"Nasycenie/luminancja",labelThumbDesc:"Czterokierunkowy suwak po spektrum kolorów."},"oj-ojColorPalette":{labelNone:"Brak"},"oj-ojColorPicker":{labelSwatches:"Próbki",labelCustomColors:"Kolory niestandardowe",labelPrevColor:"Poprzedni kolor",labelDefColor:"Kolor domyślny",labelDelete:"Usuń",labelDeleteQ:"Usunąć?",labelAdd:"Dodaj",labelAddColor:"Dodaj kolor",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Odcień",labelSliderSaturation:"Nasycenie",labelSliderSat:"Nasyc.",labelSliderLightness:"Średnia biel",labelSliderLum:"Jasność",labelSliderAlpha:"Alfa",labelOpacity:"Nieprzezroczystość",labelSliderRed:"Czerwony",labelSliderGreen:"Zielony",labelSliderBlue:"Niebieski"},"oj-ojFilePicker":{dropzoneText:"Aby wysłać, proszę przeciągnąć pliki tutaj lub kliknąć",singleFileUploadError:"Proszę wysyłać po jednym pliku.",singleFileTypeUploadError:"Nie można wysłać plików typu {fileType}.",multipleFileTypeUploadError:"Nie można wysłać plików typu {fileTypes}.",dropzonePrimaryText:"Przeciąganie i upuszczanie",secondaryDropzoneText:"Proszę wybrać plik lub go tutaj przeciągnąć.",secondaryDropzoneTextMultiple:"Proszę wybrać pliki lub je tutaj przeciągnąć.",unknownFileType:"nieznany"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"W toku"},"oj-ojMessage":{labelCloseIcon:"Zamknięcie",categories:{error:"Błąd",warning:"Ostrzeżenie",info:"Informacja",confirmation:"Potwierdzenie",none:"Brak"}},"oj-ojMessages":{labelLandmark:"Komunikaty",ariaLiveRegion:{navigationFromKeyboard:"Wchodzenie do obszaru komunikatów. Aby się cofnąć do elementu, na którym znajdował się fokus, proszę nacisnąć klawisz F6.",navigationToTouch:"W obszarze komunikatów są nowe komunikaty. Aby przejść do nich, proszę użyć pokrętła VoiceOver.",navigationToKeyboard:"W obszarze komunikatów są nowe komunikaty. Aby przejść do nich, proszę nacisnąć klawisz F6.",newMessage:"Kategoria komunikatów: {category}. {summary}. {detail}.",noDetail:"Szczegóły nie są dostępne"}},"oj-ojMessageBanner":{close:"Zamknięcie",navigationFromMessagesRegion:"Wchodzenie do obszaru komunikatów. Aby się cofnąć do elementu, na którym znajdował się fokus, proszę nacisnąć klawisz F6.",navigationToMessagesRegion:"W obszarze komunikatów są nowe komunikaty. Aby przejść do nich, proszę nacisnąć klawisz F6.",error:"Błąd",warning:"Ostrzeżenie",info:"Informacja",confirmation:"Potwierdzenie"},"oj-ojConveyorBelt":{tipArrowNext:"Następna",tipArrowPrevious:"Poprzednia"},"oj-ojTrain":{stepInfo:"Etap {index} z {count}.",stepStatus:"Status: {status}.",stepCurrent:"Bieżące",stepVisited:"Odwiedzone",stepNotVisited:"Nieodwiedzone",stepDisabled:"Wyłączone",stepMessageType:"Typ komunikatu: {messageType}.",stepMessageConfirmation:"Potwierdzone",stepMessageInfo:"Informacja",stepMessageWarning:"Ostrzeżenie",stepMessageError:"Błąd"}});