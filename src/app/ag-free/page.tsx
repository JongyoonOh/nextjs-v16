'use client';

import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, ColDef } from 'ag-grid-community'; // ColDef 타입 추가
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// 커뮤니티 모듈 등록
ModuleRegistry.registerModules([AllCommunityModule]);

export default function AgFreePage() {
  // 1. 데이터 정의
  const rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // 2. 컬럼 정의 (ColDef[] 타입을 명시하여 타입 에러 방지)
  const columnDefs: ColDef[] = [
    { field: "make", headerName: "제조사" }, 
    { field: "model", headerName: "모델" }, 
    { field: "price", headerName: "가격" }, 
    { field: "electric", headerName: "전기차 여부" }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">AG-Grid Community (Free)</h1>
      {/* 3. 그리드 컨테이너: 테마 클래스와 높이/너비 설정 */}
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact 
          rowData={rowData} 
          columnDefs={columnDefs} // 변수명을 columnDefs로 맞춰서 전달
        />
      </div>
    </div>
  );
}