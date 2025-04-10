define({"oj-message":{fatal:"Maut",error:"Ralat",warning:"Amaran",info:"Maklumat",confirmation:"Pengesahan","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Nilai bukan dalam format yang dijangka.",detail:"Masukkan nilai dalam format yang dijangka.","plural-separator":", ",hint:{summary:"Contoh: {exampleValue}",detail:"Cuba lagi menggunakan format seperti ini: {exampleValue}.","detail-plural":"Masukkan nilai dalam format ini: {exampleValue}."},optionHint:{detail:"Nilai yang diterima untuk pilihan '{propertyName}' ialah '{propertyValueValid}'.","detail-plural":"Nilai yang diterima untuk pilihan '{propertyName}' ialah '{propertyValueValid}'."},optionTypesMismatch:{summary:"Nilai untuk pilihan '{requiredPropertyName}' diperlukan apabila pilihan '{propertyName}'ditetapkan kepada '{propertyValue}'."},optionTypeInvalid:{summary:"Nilai jenis yang dijangka tidak diberikan untuk pilihan '{propertyName}'."},optionOutOfRange:{summary:"Nilai {propertyValue} berada di luar julat untuk pilihan '{propertyName}'."},optionValueInvalid:{summary:"Nilai '{propertyValue}' yang tidak sah ditentukan untuk pilihan'{propertyName}'."},number:{decimalFormatMismatch:{summary:"Nilai yang diberikan bukan dalam format nombor yang dijangka."},shortLongUnsupportedParse:{summary:"'short' dan 'long' tidak disokong untuk penghuraian penukar.",detail:"Tukar komponen kepada readonly. Medan readonly tidak memanggil fungsi hurai parse."},currencyFormatMismatch:{summary:"Nilai yang diberikan bukan dalam format mata wang yang dijangka."},percentFormatMismatch:{summary:"Nilai yang diberikan bukan dalam format peratus yang dijangka."},invalidNumberFormat:{summary:"Nilai yang diberikan bukan dalam nombor yang sah.",detail:"Sila berikan nombor yang sah."}},color:{invalidFormat:{summary:"Format warna tidak sah.",detail:"Spesifikasi pilihan format warna tidak sah."},invalidSyntax:{summary:"Spesifikasi warna tidak sah.",detail:"Masukkan nilai warna yang mematuhi standard CSS3."}},datetime:{datetimeOutOfRange:{summary:"Nilai '{value}' berada di luar julat untuk'{propertyName}'.",detail:"Masukkan nilai antara '{minValue}' hingga '{maxValue}'.",hour:"jam",minute:"minit",second:"saat",millisec:"milisaat",month:"bulan",day:"hari",year:"tahun","month name":"nama bulan",weekday:"hari bekerja"},dateFormatMismatch:{summary:"Nilai yang diberikan bukan dalam format tarikh yang dijangka."},invalidTimeZoneID:{summary:"ID zon waktu {timeZoneID} yang tidak sah diberikan."},nonExistingTime:{summary:"Masa input tidak wujud kerana jatuh semasa peralihan kepada waktu jimat siang."},missingTimeZoneData:{summary:"Data Zon Waktu tiada. Sila panggil 'ojs/ojtimezonedata' yang diperlukan untuk memuatkan data Zon Waktu."},timeFormatMismatch:{summary:"Nilai yang diberikan bukan dalam format masa yang dijangka."},datetimeFormatMismatch:{summary:"Nilai yang diberikan bukan dalam format tarikh dan masa yang dijangka."},dateToWeekdayMismatch:{summary:"Hari '{date}' tidak jatuh pada '{weekday}'.",detail:"Masukkan hari bekerja yang sepadan dengan tarikh tersebut."},invalidISOString:{invalidRangeSummary:"Nilai '{value}' berada di luar julat untuk medan'{propertyName}' dalam rentetan ISO 8601 '{isoStr}'.",summary:"'{isoStr}' yang diberikan bukan dalam rentetan ISO 8601 yang sah.",detail:"Sila berikan rentetan ISO 8601 yang sah."}}},"oj-validator":{length:{hint:{min:"Masukkan {min} atau lebih aksara.",max:"Masukkan {max} atau kurang aksara.",inRange:"Masukkan {min} hingga {max} aksara.",exact:"Masukkan {length} aksara."},messageDetail:{tooShort:"Masukkan {min} atau lebih aksara.",tooLong:"Masukkan tidak lebih daripada {max} aksara."},messageSummary:{tooShort:"Aksara terlalu sedikit.",tooLong:"Aksara terlalu banyak."}},range:{number:{hint:{min:"Masukkan nombor yang lebih besar daripada atau sama dengan {min}.",max:"Masukkan nombor yang kurang daripada atau sama dengan {max}.",inRange:"Masukkan nombor antara {min} hingga {max}.",exact:"Masukkan nombor {num}."},messageDetail:{rangeUnderflow:"Masukkan {min} atau nombor yang lebih tinggi.",rangeOverflow:"Masukkan {max} atau nombor yang lebih rendah.",exact:"Masukkan nombor {num}."},messageSummary:{rangeUnderflow:"Nombor terlalu rendah.",rangeOverflow:"Nombor terlalu tinggi."}},datetime:{hint:{min:"Masukkan tarikh dan masa pada atau selepas {min}.",max:"Masukkan tarikh dan masa pada atau sebelum {max}.",inRange:"Masukkan tarikh dan masa antara {min} hingga {max}."},messageDetail:{rangeUnderflow:"Masukkan tarikh pada atau selepas {min}.",rangeOverflow:"Masukkan tarikh pada atau sebelum {max}."},messageSummary:{rangeUnderflow:"Tarikh dan masa adalah sebelum tarikh dan masa minimum.",rangeOverflow:"Tarikh dan masa adalah selepas tarikh dan masa maksimum."}},date:{hint:{min:"Masukkan tarikh pada atau selepas {min}.",max:"Masukkan tarikh pada atau sebelum {max}.",inRange:"Masukkan tarikh antara {min} hingga {max}."},messageDetail:{rangeUnderflow:"Masukkan tarikh pada atau selepas {min}.",rangeOverflow:"Masukkan tarikh pada atau sebelum {max}."},messageSummary:{rangeUnderflow:"Tarikh adalah sebelum tarikh minimum.",rangeOverflow:"Tarikh adalah selepas tarikh maksimum."}},time:{hint:{min:"Masukkan masa pada atau selepas {min}.",max:"Masukkan masa pada atau sebelum {max}.",inRange:"Masukkan masa antara {min} hingga {max}."},messageDetail:{rangeUnderflow:"Masukkan masa pada atau selepas {min}.",rangeOverflow:"Masukkan masa pada atau sebelum {max}."},messageSummary:{rangeUnderflow:"Masa adalah sebelum masa minimum.",rangeOverflow:"Masa adalah selepas masa maksimum."}}},restriction:{date:{messageSummary:"Tarikh {value} adalah entri yang dinyahdayakan.",messageDetail:"Tarikh yang anda pilih tidak tersedia. Cuba tarikh lain."}},regExp:{summary:"Format tidak betul.",detail:"Masukkan nilai dibenarkan yang diperihalkan dalam ungkapan biasa ini: '{pattern}'."},required:{summary:"Nilai diperlukan.",detail:"Masukkan nilai."}},"oj-ojEditableValue":{loading:"Memuatkan",requiredText:"Diperlukan",helpSourceText:"Ketahui lebih lanjut..."},"oj-ojInputDate":{done:"Selesai",cancel:"Batal",time:"Masa",accessibleClearIconAltText:"Kosongkan input",prevText:"Sebelumnya",nextText:"Seterusnya",currentText:"Hari Ini",weekHeader:"Minggu",tooltipCalendar:"Pilih Tarikh.",tooltipCalendarTime:"Pilih Tarikh Masa.",tooltipCalendarDisabled:"Pilih Tarikh Dinyahdayakan.",tooltipCalendarTimeDisabled:"Pilih Tarikh Masa Dinyahdayakan.",picker:"Pemilih",weekText:"Minggu",datePicker:"Pemilih Tarikh",inputHelp:"Tekan Kekunci turun atau Kekunci naik untuk akses kepada Kalendar.",inputHelpBoth:"Tekan Kekunci turun atau Kekunci naik untuk akses kepada Kalendar dan Shift + Kekunci turun atau Kekunci naik untuk akses kepada juntai bawah masa.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{accessibleClearIconAltText:"Kosongkan input",cancelText:"Batal",okText:"OK",currentTimeText:"Sekarang",hourWheelLabel:"Jam",minuteWheelLabel:"Minit",ampmWheelLabel:"AMPM",tooltipTime:"Pilih Masa.",tooltipTimeDisabled:"Pilih Masa Dinyahdayakan.",inputHelp:"Tekan Kekunci turun atau Kekunci naik untuk akses kepada juntai bawah masa.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Melebihi panjang maksimum {len}.",accessibleMaxLengthRemaining:"Baki {chars} aksara."},"oj-ojInputText":{accessibleClearIcon:"Kosongkan"},"oj-ojInputPassword":{regexp:{messageDetail:"Nilai mestilah sepadan dengan corak ini: '{pattern}'."},accessibleShowPassword:"Tunjukkan kata laluan.",accessibleHidePassword:"Sembunyikan kata laluan."},"oj-ojFilmStrip":{labelAccFilmStrip:"Memaparkan halaman {pageIndex} daripada {pageCount}",labelAccArrowNextPage:"Pilih Seterusnya untuk memaparkan halaman seterusnya",labelAccArrowPreviousPage:"Pilih Sebelumnya untuk memaparkan halaman sebelumnya",tipArrowNextPage:"Seterusnya",tipArrowPreviousPage:"Sebelumnya"},"oj-ojDataGrid":{accessibleSortAscending:"{id} diisih dalam susunan menaik",accessibleSortDescending:"{id} diisih dalam susunan menurun",accessibleSortable:"{id} boleh isih",accessibleActionableMode:"Masuk mod boleh tindak.",accessibleNavigationMode:"Masuk mod navigasi, tekan F2 untuk memasuki mod edit atau boleh tindak.",accessibleEditableMode:"Masuk mod boleh tindak, tekan Escape untuk menavigasi di luar grid data.",accessibleSummaryExact:"Ini ialah grid data dengan {rownum} baris dan {colnum} lajur",accessibleSummaryEstimate:"Ini ialah grid data dengan bilangan baris dan lajur yang tidak diketahui",accessibleSummaryExpanded:"Terdapat {num} baris dikembangkan pada masa ini",accessibleRowExpanded:"Baris dikembangkan",accessibleExpanded:"Dikembangkan",accessibleRowCollapsed:"Baris diruntuhkan",accessibleCollapsed:"Diruntuhkan",accessibleRowSelected:"Baris {row} dipilih",accessibleColumnSelected:"Lajur {column} dipilih",accessibleStateSelected:"dipilih",accessibleMultiCellSelected:"{num} sel dipilih",accessibleColumnSpanContext:"{extent} lebar",accessibleRowSpanContext:"{extent} tinggi",accessibleRowContext:"Baris {index}",accessibleColumnContext:"Lajur {index}",accessibleRowHeaderContext:"Pengepala Baris {index}",accessibleColumnHeaderContext:"Pengepala Lajur {index}",accessibleRowEndHeaderContext:"Pengepala Akhir Baris {index}",accessibleColumnEndHeaderContext:"Pengepala Akhir Lajur {index}",accessibleRowHeaderLabelContext:"Label Pengepala Baris {level}",accessibleColumnHeaderLabelContext:"Label Pengepala Lajur {level}",accessibleRowEndHeaderLabelContext:"Label Pengepala Akhir Baris {level}",accessibleColumnEndHeaderLabelContext:"Label Pengepala Akhir Lajur {level}",accessibleLevelContext:"Tahap {level}",accessibleRangeSelectModeOn:"Mod tambahkan julat sel yang dipilih dihidupkan.",accessibleRangeSelectModeOff:"Mod tambahkan julat sel yang dipilih dimatikan.",accessibleFirstRow:"Anda telah mencapai baris pertama.",accessibleLastRow:"Anda telah mencapai baris terakhir.",accessibleFirstColumn:"Anda telah mencapai lajur pertama",accessibleLastColumn:"Anda telah mencapai lajur terakhir.",accessibleSelectionAffordanceTop:"Pemegang pilihan atas.",accessibleSelectionAffordanceBottom:"Pemegang pilihan bawah.",accessibleLevelHierarchicalContext:"Tahap {level}",accessibleRowHierarchicalFull:"Baris {posInSet} daripada {setSize} baris",accessibleRowHierarchicalPartial:"Baris {posInSet} daripada sekurang-kurangnya {setSize} baris",accessibleRowHierarchicalUnknown:"Sekurang-kurangnya baris {posInSet} daripada sekurang-kurangnya {setSize} baris",accessibleColumnHierarchicalFull:"Lajur {posInSet} daripada {setSize} lajur",accessibleColumnHierarchicalPartial:"Lajur {posInSet} daripada sekurang-kurangnya {setSize} lajur",accessibleColumnHierarchicalUnknown:"Sekurang-kurangnya lajur {posInSet} daripada sekurang-kurangnya {setSize} lajur",msgFetchingData:"Mengambil Data...",msgNoData:"Tiada item untuk dipaparkan.",labelHideColumns:"Sembunyikan Lajur",labelHideRows:"Sembunyikan Baris",labelUnhideColumns:"Nyahsembunyikan Lajur",labelUnhideRows:"Nyahsembunyikan Baris",labelResize:"Ubah Saiz",labelResizeWidth:"Ubah Saiz Lebar",labelResizeHeight:"Ubah Saiz Tinggi",labelSortAsc:"Isih Menaik",labelSortDsc:"Isih Menurun",labelSortRow:"Isih Baris",labelSortRowAsc:"Isih Baris Menaik",labelSortRowDsc:"Isih Baris Menurun",labelSortCol:"Isih Lajur",labelSortColAsc:"Isih Lajur Menaik",labelSortColDsc:"Isih Lajur Menurun",labelFilter:"Penapis",labelFilterCol:"Tapis Baris",labelCut:"Potong",labelPaste:"Tampal",labelCutCells:"Potong",labelPasteCells:"Tampal",labelCopyCells:"Salin",labelAutoFill:"Autoisi",labelEnableNonContiguous:"Dayakan Pemilihan Bukan Bersebelahan",labelDisableNonContiguous:"Nyahdayakan Pemilihan Bukan Bersebelahan",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Batal",accessibleContainsControls:"Mengandungi Kawalan",labelSelectMultiple:"Pilih Berbilang",labelResizeDialogApply:"Gunakan",labelResizeFitToContent:"Ubah Saiz untuk Dimuatkan",columnWidth:"Lebar dalam Piksel",rowHeight:"Tinggi dalam Piksel",labelResizeColumn:"Ubah Saiz Lajur",labelResizeRow:"Ubah Saiz Barisan",resizeColumnDialog:"Ubah saiz lajur",resizeRowDialog:"Ubah saiz barisan",labelFreezeRow:"Bekukan Baris",labelFreezeCol:"Bekukan Lajur",labelUnfreezeRow:"Nyahbekukan Baris",labelUnfreezeCol:"Nyahbekukan Lajur",collapsedText:"Runtuhkan",expandedText:"Kembangkan",tooltipRequired:"Diperlukan"},"oj-ojRowExpander":{accessibleLevelDescription:"Tahap {level}",accessibleRowDescription:"Tahap {level}, Baris {num} daripada {total}",accessibleRowExpanded:"Baris dikembangkan",accessibleRowCollapsed:"Baris diruntuhkan",accessibleStateExpanded:"dikembangkan",accessibleStateCollapsed:"diruntuhkan"},"oj-ojStreamList":{msgFetchingData:"Mengambil Data..."},"oj-ojListView":{msgFetchingData:"Mengambil Data...",msgNoData:"Tiada item untuk dipaparkan.",msgItemsAppended:"{count} item ditambahkan pada penghujung.",msgFetchCompleted:"Semua item diambil.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleExpandCollapseInstructionText:"Gunakan anak kekunci untuk kembangkan dan runtuhkan.",accessibleGroupExpand:"Dikembangkan",accessibleGroupCollapse:"Diruntuhkan",accessibleReorderTouchInstructionText:"Ketik dua kali dan tahan. Tunggu bunyi, kemudian seret untuk menyusun semula.",accessibleReorderBeforeItem:"Sebelum {item}",accessibleReorderAfterItem:"Selepas {item}",accessibleReorderInsideItem:"Ke dalam {item}",accessibleNavigateSkipItems:"Melangkau {numSkip} item",accessibleSuggestion:"Cadangan",labelCut:"Potong",labelCopy:"Salin",labelPaste:"Tampal",labelPasteBefore:"Tampal Sebelum",labelPasteAfter:"Tampal Selepas"},"oj-ojWaterfallLayout":{msgFetchingData:"Mengambil Data..."},"oj-_ojLabel":{tooltipHelp:"Bantuan",tooltipRequired:"Diperlukan"},"oj-ojLabel":{tooltipHelp:"Bantuan",tooltipRequired:"Diperlukan"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Susutan",tooltipIncrement:"Tokokan"},"oj-ojTable":{accessibleAddRow:"Masukkan data untuk menambahkan baris baru.",accessibleColumnContext:"Lajur {index}",accessibleColumnFooterContext:"Pengaki Lajur {index}",accessibleColumnHeaderContext:"Pengepala Lajur {index}",accessibleContainsControls:"Mengandungi Kawalan",accessibleColumnsSpan:"Menjangkau {count} Lajur",accessibleEditableSummary:"Tekan F2 untuk memfokuskan kawalan baca sahaja atau Enter untuk memulakan pengeditan",accessibleRowContext:"Baris {index}",accessibleSortable:"{id} boleh isih",accessibleSortAscending:"{id} diisih dalam susunan menaik",accessibleSortDescending:"{id} diisih dalam susunan menurun",accessibleStateSelected:"dipilih",accessibleStateUnselected:"dinyahpilih",accessibleSummaryEstimate:"Jadual dengan {colnum} lajur dan lebih daripada {rownum} barisan",accessibleSummaryExact:"Jadual dengan {colnum} lajur dan {rownum} barisan",labelAccSelectionAffordanceTop:"Pemegang pilihan atas",labelAccSelectionAffordanceBottom:"Pemegang pilihan bawah",labelEnableNonContiguousSelection:"Dayakan Pemilihan Bukan Bersebelahan",labelDisableNonContiguousSelection:"Nyahdayakan Pemilihan Bukan Bersebelahan",labelResize:"Ubah Saiz",labelResizeColumn:"Ubah Saiz Lajur",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Batal",labelResizePopupSpinner:"Ubah Saiz Lajur",labelResizeColumnDialog:"Ubah saiz lajur",labelColumnWidth:"Lebar dalam Piksel",labelResizeDialogApply:"Gunakan",labelSelectRow:"Pilih Baris",labelSelectAllRows:"Pilih Semua Baris",labelEditRow:"Edit Baris",labelSelectAndEditRow:"Pilih Dan Edit Baris",labelSelectColumn:"Pilih Lajur",labelSort:"Isih",labelSortAsc:"Isih Menaik",labelSortDsc:"Isih Menurun",msgFetchingData:"Mengambil Data...",msgNoData:"Tiada data untuk dipaparkan.",msgInitializing:"Memulakan...",msgColumnResizeWidthValidation:"Nilai lebar mestilah integer.",msgScrollPolicyMaxCountSummary:"Melebihi baris maksimum untuk penskrolan jadual.",msgScrollPolicyMaxCountDetail:"Sila muat semula dengan set data yang lebih kecil.",msgStatusSortAscending:"{0} diisih dalam susunan menaik.",msgStatusSortDescending:"{0} diisih dalam susunan menurun.",tooltipRequired:"Diperlukan"},"oj-ojTabs":{labelCut:"Potong",labelPasteBefore:"Tampal Sebelum",labelPasteAfter:"Tampal Selepas",labelRemove:"Alih Keluar",labelReorder:"Susun Semula",removeCueText:"Boleh Alih Keluar"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Pilih nilai."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Pilih nilai."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Pilih nilai."},searchField:"Medan carian",noMatchesFound:"Tiada padanan ditemui",noMoreResults:"Tiada hasil lagi",oneMatchesFound:"Satu padanan ditemui",moreMatchesFound:"{num} padanan ditemui",filterFurther:"Lebih banyak hasil tersedia, sila tapis lebih lanjut."},"oj-ojSwitch":{SwitchON:"Hidup",SwitchOFF:"Mati"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Tiada padanan ditemui",noMoreResults:"Tiada hasil lagi",oneMatchesFound:"Satu padanan ditemui",moreMatchesFound:"{num} padanan ditemui",filterFurther:"Lebih banyak hasil tersedia, sila tapis lebih lanjut."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Pilih nilai."},noMatchesFound:"Tiada padanan ditemui",oneMatchFound:"Satu padanan ditemui",multipleMatchesFound:"{num} padanan ditemui",nOrMoreMatchesFound:"{num} atau lebih banyak padanan ditemui",cancel:"Batal",labelAccOpenDropdown:"kembangkan",labelAccClearValue:"kosongkan nilai",noResultsLine1:"Tiada hasil ditemui",noResultsLine2:"Kami tidak boleh menemui apa-apa yang sepadan dengan carian anda."},"oj-ojInputSearch2":{cancel:"Batal",noSuggestionsFound:"Tiada cadangan ditemui"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Tiada padanan ditemui",oneMatchesFound:"Satu padanan ditemui",moreMatchesFound:"{num} padanan ditemui"},"oj-ojTreeView":{treeViewSelectorAria:"Pemilih TreeView {rowKey}",retrievingDataAria:"Mendapatkan semula data untuk nod: {nodeText}",receivedDataAria:"Menerima data untuk nod: {nodeText}"},"oj-ojTree":{stateLoading:"Memuatkan...",labelNewNode:"Nod Baru",labelMultiSelection:"Berbilang Pilihan",labelEdit:"Edit",labelCreate:"Cipta",labelCut:"Potong",labelCopy:"Salin",labelPaste:"Tampal",labelPasteAfter:"Tampal Selepas",labelPasteBefore:"Tampal Sebelum",labelRemove:"Alih Keluar",labelRename:"Namakan Semula",labelNoData:"Tiada data"},"oj-ojPagingControl":{labelAccPaging:"Penghalamanan",labelAccPageNumber:"Kandungan halaman {pageNum} dimuatkan",labelAccNavFirstPage:"Halaman Pertama",labelAccNavLastPage:"Halaman Terakhir",labelAccNavNextPage:"Halaman Seterusnya",labelAccNavPreviousPage:"Halaman Sebelumnya",labelAccNavPage:"Halaman",labelLoadMore:"Tunjukkan Lagi...",labelLoadMoreMaxRows:"Had Maksimum {maxRows} baris dicapai",labelNavInputPage:"Halaman",labelNavInputPageMax:"daripada {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} daripada {pageMax} item",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} daripada sekurang-kurangnya {pageMax} item",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} daripada kira-kira {pageMax} item",msgItemRangeNoTotal:"{pageFrom}-{pageTo} item",fullMsgItem:"{pageTo} daripada {pageMax} item",fullMsgItemAtLeast:"{pageTo} daripada sekurang-kurangnya {pageMax} item",fullMsgItemApprox:"{pageTo} daripada kira-kira {pageMax} item",msgItemNoTotal:"{pageTo} item",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"daripada",msgItemRangeOfAtLeast:"daripada sekurang-kurangnya",msgItemRangeOfApprox:"daripada kira-kira",msgItemRangeItems:"item",tipNavInputPage:"Pergi Ke Halaman",tipNavPageLink:"Pergi Ke Halaman {pageNum}",tipNavNextPage:"Seterusnya",tipNavPreviousPage:"Sebelumnya",tipNavFirstPage:"Pertama",tipNavLastPage:"Terakhir",pageInvalid:{summary:"Nilai halaman yang dimasukkan tidak sah.",detail:"Sila masukkan nilai yang lebih besar daripada 0."},maxPageLinksInvalid:{summary:"Nilai untuk maxPageLinks tidak sah.",detail:"Sila masukkan nilai yang lebih besar daripada 4."}},"oj-ojMasonryLayout":{labelCut:"Potong",labelPasteBefore:"Tampal Sebelum",labelPasteAfter:"Tampal Selepas"},"oj-panel":{labelAccButtonExpand:"Kembangkan",labelAccButtonCollapse:"Runtuhkan",labelAccButtonRemove:"Alih Keluar",labelAccFlipForward:"Selak ke depan",labelAccFlipBack:"Selak ke belakang",tipDragToReorder:"Seret untuk menyusun semula",labelAccDragToReorder:"Seret untuk menyusun semula, menu konteks tersedia"},"oj-ojChart":{labelDefaultGroupName:"Kumpulan {0}",labelSeries:"Siri",labelGroup:"Kumpulan",labelDate:"Tarikh",labelValue:"Nilai",labelTargetValue:"Sasaran",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Peratus",labelLow:"Rendah",labelHigh:"Tinggi",labelOpen:"Buka",labelClose:"Tutup",labelVolume:"Volum",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min",labelMax:"Maks",labelOther:"Lain-lain",tooltipPan:"Sorot",tooltipSelect:"Pilihan marki",tooltipZoom:"Zum marki",componentName:"Carta"},"oj-dvtBaseGauge":{componentName:"Tolok"},"oj-ojDiagram":{promotedLink:"{0} pautan",promotedLinks:"{0} pautan",promotedLinkAriaDesc:"Tidak langsung",componentName:"Gambar Rajah"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} hari",accessibleDurationHours:"{0} jam",accessibleTaskInfo:"Masa mula ialah {0}, masa tamat ialah {1}, tempoh ialah {2}",accessibleMilestoneInfo:"Masa ialah {0}",accessibleRowInfo:"Baris {0}",accessibleTaskTypeMilestone:"Peristiwa Penting",accessibleTaskTypeSummary:"Ringkasan",accessiblePredecessorInfo:"{0} pendahulu",accessibleSuccessorInfo:"{0} pengganti",accessibleDependencyInfo:"Jenis kebergantungan {0}, menyambungkan {1} kepada {2}",startStartDependencyAriaDesc:"mula ke mula",startFinishDependencyAriaDesc:"mula ke selesai",finishStartDependencyAriaDesc:"selesai ke mula",finishFinishDependencyAriaDesc:"selesai ke selesai",tooltipZoomIn:"Zum Masuk",tooltipZoomOut:"Zum Keluar",labelLevel:"Tahap",labelRow:"Baris",labelStart:"Mula",labelEnd:"Tamat",labelDate:"Tarikh",labelBaselineStart:"Mula Tugas Asas",labelBaselineEnd:"Tamat Tugas Asas",labelBaselineDate:"Tarikh Tugas Asas",labelDowntimeStart:"Waktu Gendala Mula",labelDowntimeEnd:"Waktu Gendala Tamat",labelOvertimeStart:"Lebih Masa Mula",labelOvertimeEnd:"Lebih Masa Tamat",labelAttribute:"Atribut",labelLabel:"Label",labelProgress:"Kemajuan",labelMoveBy:"Alih Mengikut",labelResizeBy:"Ubah Saiz Mengikut",taskMoveInitiated:"Alih tugas dimulakan",taskResizeEndInitiated:"Ubah saiz tugas dimulakan",taskResizeStartInitiated:"Mula ubah saiz tugas dimulakan",taskMoveSelectionInfo:"{0} yang lain dipilih",taskResizeSelectionInfo:"{0} yang lain dipilih",taskMoveInitiatedInstruction:"Gunakan kekunci anak panah untuk alih",taskResizeInitiatedInstruction:"Gunakan kekunci anak panah untuk ubah saiz",taskMoveFinalized:"Alih tugas dimuktamadkan",taskResizeFinalized:"Ubah saiz tugas dimuktamadkan",taskMoveCancelled:"Alih tugas dibatalkan",taskResizeCancelled:"Ubah saiz tugas dibatalkan",taskResizeStartHandle:"Pemegang mula ubah saiz tugas",taskResizeEndHandle:"Pemegang tamat ubah saiz tugas"},"oj-ojLegend":{componentName:"Petunjuk",tooltipExpand:"Kembangkan",tooltipCollapse:"Runtuhkan",labelInvalidData:"Data tidak sah",labelNoData:"Tiada data untuk dipaparkan",labelClearSelection:"Kosongkan Pilihan",stateSelected:"Dipilih",stateUnselected:"Dinyahpilih",stateMaximized:"Dimaksimumkan",stateMinimized:"Diminimumkan",stateIsolated:"Diasingkan",labelCountWithTotal:"{0} daripada {1}",accessibleContainsControls:"Mengandungi Kawalan"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Lain-lain",labelGroup:"Kumpulan",labelSize:"Saiz",labelAdditionalData:"Data Tambahan",componentName:"{0} Kotak"},"oj-ojPictoChart":{componentName:"Carta Gambar"},"oj-ojSparkChart":{componentName:"Carta"},"oj-ojSunburst":{labelColor:"Warna",labelSize:"Saiz",tooltipExpand:"Kembangkan",tooltipCollapse:"Runtuhkan",componentName:"Sinaran"},"oj-ojTagCloud":{componentName:"Awan Tag",accessibleContainsControls:"Mengandungi Kawalan",labelCountWithTotal:"{0} daripada {1}",labelInvalidData:"Data tidak sah",stateCollapsed:"Diruntuhkan",stateDrillable:"Boleh Dalami",stateExpanded:"Dikembangkan",stateIsolated:"Diasingkan",stateHidden:"Disembunyikan",stateMaximized:"Dimaksimumkan",stateMinimized:"Diminimumkan",stateVisible:"Boleh Dilihat"},"oj-ojThematicMap":{componentName:"Peta Tematik",areasRegion:"Kawasan",linksRegion:"Pautan",markersRegion:"Penanda"},"oj-ojTimeAxis":{componentName:"Paksi Masa"},"oj-ojTimeline":{componentName:"Garis Masa",stateMinimized:"Diminimumkan",stateMaximized:"Dimaksimumkan",stateIsolated:"Diasingkan",stateHidden:"Disembunyikan",stateExpanded:"Dikembangkan",stateVisible:"Boleh Dilihat",stateDrillable:"Boleh Dalami",stateCollapsed:"Diruntuhkan",labelCountWithTotal:"{0} daripada {1}",accessibleItemDesc:"Perihalan ialah {0}.",accessibleItemEnd:"Masa tamat ialah {0}.",accessibleItemStart:"Masa mula ialah {0}.",accessibleItemTitle:"Tajuk ialah {0}.",labelSeries:"Siri",tooltipZoomIn:"Zum Masuk",tooltipZoomOut:"Zum Keluar",labelStart:"Mula",labelEnd:"Tamat",labelAccNavNextPage:"Halaman Seterusnya",labelAccNavPreviousPage:"Halaman Sebelumnya",tipArrowNextPage:"Seterusnya",tipArrowPreviousPage:"Sebelumnya",navArrowDisabledState:"Dinyahdayakan",labelDate:"Tarikh",labelTitle:"Tajuk",labelDescription:"Perihalan",labelMoveBy:"Alih Mengikut",labelResizeBy:"Ubah Saiz Mengikut",itemMoveInitiated:"Alih acara dimulakan",itemResizeEndInitiated:"Penghujung ubah saiz acara dimulakan",itemResizeStartInitiated:"Permulaan ubah saiz acara dimulakan",itemMoveSelectionInfo:"{0} yang lain dipilih",itemResizeSelectionInfo:"{0} yang lain dipilih",itemMoveInitiatedInstruction:"Gunakan kekunci anak panah untuk alih",itemResizeInitiatedInstruction:"Gunakan kekunci anak panah untuk ubah saiz",itemMoveFinalized:"Alih acara dimuktamadkan",itemResizeFinalized:"Ubah saiz acara dimuktamadkan",itemMoveCancelled:"Alih acara dibatalkan",itemResizeCancelled:"Ubah saiz acara dibatalkan",itemResizeStartHandle:"Pemegang permulaan ubah saiz acara",itemResizeEndHandle:"Pemegang penghujung ubah saiz acara"},"oj-ojTreemap":{labelColor:"Warna",labelSize:"Saiz",tooltipIsolate:"Asingkan",tooltipRestore:"Pulihkan",componentName:"Peta pepohon"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Data tidak sah",labelNoData:"Tiada data untuk dipaparkan",labelClearSelection:"Kosongkan Pilihan",labelDataVisualization:"Visualisasi Data",stateSelected:"Dipilih",stateUnselected:"Dinyahpilih",stateMaximized:"Dimaksimumkan",stateMinimized:"Diminimumkan",stateExpanded:"Dikembangkan",stateCollapsed:"Diruntuhkan",stateIsolated:"Diasingkan",stateHidden:"Disembunyikan",stateVisible:"Boleh Dilihat",stateDrillable:"Boleh Dalami",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} daripada {1}",accessibleContainsControls:"Mengandungi Kawalan"},"oj-ojRatingGauge":{labelClearSelection:"Kosongkan Pilihan",stateSelected:"Dipilih",stateUnselected:"Dinyahpilih",stateMaximized:"Dimaksimumkan",stateMinimized:"Diminimumkan",stateExpanded:"Dikembangkan",stateCollapsed:"Diruntuhkan",stateIsolated:"Diasingkan",stateHidden:"Disembunyikan",stateVisible:"Boleh Dilihat",stateDrillable:"Boleh Dalami",labelCountWithTotal:"{0} daripada {1}",accessibleContainsControls:"Mengandungi Kawalan"},"oj-ojStatusMeterGauge":{labelClearSelection:"Kosongkan Pilihan",stateSelected:"Dipilih",stateUnselected:"Dinyahpilih",stateMaximized:"Dimaksimumkan",stateMinimized:"Diminimumkan",stateExpanded:"Dikembangkan",stateCollapsed:"Diruntuhkan",stateIsolated:"Diasingkan",stateHidden:"Disembunyikan",stateVisible:"Boleh Dilihat",stateDrillable:"Boleh Dalami",labelCountWithTotal:"{0} daripada {1}",accessibleContainsControls:"Mengandungi Kawalan"},"oj-ojNavigationList":{defaultRootLabel:"Senarai Navigasi",hierMenuBtnLabel:"Butang Menu Hierarki",selectedLabel:"dipilih",previousIcon:"Sebelumnya",msgFetchingData:"Mengambil Data...",msgNoData:"Tiada item untuk dipaparkan.",overflowItemLabel:"Lagi",accessibleReorderTouchInstructionText:"Ketik dua kali dan tahan. Tunggu bunyi, kemudian seret untuk menyusun semula.",accessibleReorderBeforeItem:"Sebelum {item}",accessibleReorderAfterItem:"Selepas {item}",labelCut:"Potong",labelPasteBefore:"Tampal Sebelum",labelPasteAfter:"Tampal Selepas",labelRemove:"Alih Keluar",removeCueText:"Boleh Alih Keluar",accessibleExpandCollapseInstructionText:"Gunakan anak kekunci untuk kembangkan dan runtuhkan."},"oj-ojSlider":{noValue:"ojSlider tiada nilai",maxMin:"Maks tidak boleh kurang daripada atau sama dengan min",startEnd:"value.start tidak boleh lebih besar daripada value.end",valueRange:"Nilai mestilah dalam julat min hingga maks",optionNum:"Pilihan {option} bukannya nombor",invalidStep:"Langkah tidak sah; langkah mestilah > 0",lowerValueThumb:"ibu jari nilai yang lebih rendah",higherValueThumb:"ibu jari nilai yang lebih tinggi"},"oj-ojDialog":{labelCloseIcon:"Tutup"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Memasuki halaman timbul. Tekan F6 untuk menavigasi antara halaman timbul dengan kawalan yang berkaitan.",ariaLiveRegionInitialFocusNone:"Halaman timbul dibuka. Tekan F6 untuk menavigasi antara halaman timbul dan kawalan yang berkaitan.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Memasuki halaman timbul. Halaman timbul boleh ditutup dengan menavigasi ke pautan terakhir dalam halaman timbul tersebut.",ariaLiveRegionInitialFocusNoneTouch:"Halaman timbul dibuka. Navigasi ke pautan seterusnya untuk mewujudkan fokus dalam halaman timbul tersebut.",ariaFocusSkipLink:"Ketik dua kali untuk menavigasi ke halaman timbul yang dibuka.",ariaCloseSkipLink:"Ketik dua kali untuk menutup halaman timbul yang dibuka."},"oj-ojRefresher":{ariaRefreshLink:"Aktifkan pautan untuk menyegar semula kandungan",ariaRefreshingLink:"Menyegar semula kandungan",ariaRefreshCompleteLink:"Segar semula selesai"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Tunjukkan tindakan mula",ariaShowEndActionsDescription:"Tunjukkan tindakan tamat",ariaHideActionsDescription:"Sembunyikan tindakan"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Tiada pengepala kumpulan yang sepadan",ariaOthersLabel:"nombor",ariaInBetweenText:"Antara {first} hingga {second}",ariaKeyboardInstructionText:"Tekan Enter untuk memilih nilai.",ariaTouchInstructionText:"Ketik dua kali dan tahan untuk memasuki mod gerak isyarat, kemudian seret ke atas atau ke bawah untuk melaraskan nilai."},"oj-ojMenu":{labelCancel:"Batal",ariaFocusSkipLink:"Fokus berada dalam menu, ketik dua kali atau leret untuk mengalihkan fokus kepada item menu pertama."},"oj-ojColorSpectrum":{labelHue:"Rona",labelOpacity:"Kelegapan",labelSatLum:"Ketepuan/Luminans",labelThumbDesc:"Spektrum warna gelangsar empat arah."},"oj-ojColorPalette":{labelNone:"Tiada"},"oj-ojColorPicker":{labelSwatches:"Reja",labelCustomColors:"Warna Tersuai",labelPrevColor:"Warna Sebelumnya",labelDefColor:"Warna Lalai",labelDelete:"Padam",labelDeleteQ:"Padam?",labelAdd:"Tambah",labelAddColor:"Tambahkan warna",labelMenuHex:"HEKS",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Rona",labelSliderSaturation:"Ketepuan",labelSliderSat:"Sab",labelSliderLightness:"Kecerahan",labelSliderLum:"Kilauan",labelSliderAlpha:"Alfa",labelOpacity:"Kelegapan",labelSliderRed:"Merah",labelSliderGreen:"Hijau",labelSliderBlue:"Biru"},"oj-ojFilePicker":{dropzoneText:"Lepaskan fail di sini atau klik untuk muat naik",singleFileUploadError:"Muat naik satu fail pada satu-satu masa.",singleFileTypeUploadError:"Anda tidak boleh memuat naik fail jenis {fileType}.",multipleFileTypeUploadError:"Anda tidak boleh memuat naik fail jenis: {fileTypes}.",dropzonePrimaryText:"Seret dan Lepaskan",secondaryDropzoneText:"Pilih fail atau lepaskan satu fail di sini.",secondaryDropzoneTextMultiple:"Pilih atau lepaskan fail di sini.",unknownFileType:"tidak diketahui"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Dalam Proses"},"oj-ojMessage":{labelCloseIcon:"Tutup",categories:{error:"Ralat",warning:"Amaran",info:"Maklumat",confirmation:"Pengesahan",none:"Tiada"}},"oj-ojMessages":{labelLandmark:"Mesej",ariaLiveRegion:{navigationFromKeyboard:"Memasuki rantau mesej. Tekan F6 untuk menavigasi kembali ke elemen yang difokuskan sebelum ini.",navigationToTouch:"Rantau mesej mengandungi mesej baru. Gunakan suara melalui rotor untuk menavigasi ke tanda tempat mesej.",navigationToKeyboard:"Rantau mesej mengandungi mesej baru. Tekan F6 untuk menavigasi ke rantau mesej yang terkini.",newMessage:"Kategori mesej {category}. {summary}. {detail}.",noDetail:"Butiran tidak tersedia"}},"oj-ojMessageBanner":{close:"Tutup",navigationFromMessagesRegion:"Memasuki rantau mesej. Tekan F6 untuk menavigasi kembali ke elemen yang difokuskan sebelum ini.",navigationToMessagesRegion:"Rantau mesej mengandungi mesej baru. Tekan F6 untuk menavigasi ke rantau mesej yang terkini.",error:"Ralat",warning:"Amaran",info:"Maklumat",confirmation:"Pengesahan"},"oj-ojConveyorBelt":{tipArrowNext:"Seterusnya",tipArrowPrevious:"Sebelumnya"},"oj-ojTrain":{stepInfo:"Langkah {index} daripada {count}.",stepStatus:"Status: {status}.",stepCurrent:"Semasa",stepVisited:"Dilawati",stepNotVisited:"Tidak dilawati",stepDisabled:"Dinyahdayakan",stepMessageType:"Jenis mesej: {messageType}.",stepMessageConfirmation:"Disahkan",stepMessageInfo:"Maklumat",stepMessageWarning:"Amaran",stepMessageError:"Ralat"}});