'use client';

import { useEffect, useRef } from 'react';
// CSS는 상단에서 한 번만 임포트하는 것이 좋습니다.
import 'jspreadsheet-ce/dist/jspreadsheet.css';

export default function JSpreadsheetPage() {
  // 1. 타입을 HTMLDivElement로 지정하여 'never' 에러 방지
  const jref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initJSS = async () => {
      // 2. jspreadsheet 라이브러리를 동적으로 가져옴
      const jspreadsheet = (await import('jspreadsheet-ce')).default;

      if (jref.current && !jref.current.firstChild) {
        // 3. 라이브러리 자체의 타입 미비로 인한 에러는 any로 우회하거나 
        // CE 버전에 맞는 옵션 구조로 전달합니다.
        (jspreadsheet as any)(jref.current, {
          data: [
            ['Excel', 'Like', 'Interface'],
            ['100', '200', '=A2+B2'],
          ],
          columns: [
            { width: 150, title: 'Column 1' }, 
            { width: 150, title: 'Column 2' }, 
            { width: 150, title: 'Column 3' }
          ],
          // 이미지의 'worksheets' 에러 방지를 위해 명시
          minDimensions: [10, 10], 
        });
      }
    };

    initJSS();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">JSpreadsheet (Excel Style)</h1>
      <div ref={jref} />
    </div>
  );
}