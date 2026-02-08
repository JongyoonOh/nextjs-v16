'use client';

import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, ModuleRegistry } from 'ag-grid-enterprise';
import { ColDef } from 'ag-grid-enterprise';
// 최신 버전에서는 아래와 같이 스타일을 임포트합니다.
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// 라이선스 키가 있다면 여기에 입력 (없으면 워터마크가 뜹니다)
// import { LicenseManager } from 'ag-grid-enterprise';
// LicenseManager.setLicenseKey('YOUR_KEY');

// 엔터프라이즈 모듈 등록
ModuleRegistry.registerModules([AllEnterpriseModule]);

export default function AgEnterprisePage() {
  // 1. 데이터 정의
  const rowData = [
    { category: "IT", task: "Next.js Setup", status: "Done" },
    { category: "IT", task: "Database Design", status: "In Progress" },
    { category: "HR", task: "Hiring", status: "Open" },
  ];

  // 2. 컬럼 정의 (변수명을 columnDefs로 통일하여 속성명과 맞춤)
  const columnDefs: ColDef[] = [
    { field: "category", rowGroup: true, hide: true },
    { field: "task" },
    { field: "status" }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">AG-Grid Enterprise (Grouping Enabled)</h1>
      {/* 3. 그리드 컨테이너: 테마 클래스와 높이 지정 필수 */}
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact 
          rowData={rowData} 
          columnDefs={columnDefs} // 변수명과 속성명이 일치함
          groupDefaultExpanded={1} // 첫 번째 그룹 자동 확장
          animateRows={true} // 행 애니메이션 활성화
        />
      </div>
    </div>
  );
}