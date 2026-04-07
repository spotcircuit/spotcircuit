import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';

const outDir = path.join(process.cwd(), 'public', 'resources', 'downloads');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function makePdf(filePath: string, title: string, subtitle?: string) {
  return new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Cover
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0a0a0a');
    doc.fillColor('#ffffff');
    doc.fontSize(26).text('SpotCircuit', { align: 'left' });
    doc.moveDown(2);
    doc.fontSize(32).text(title, { align: 'left' });
    if (subtitle) {
      doc.moveDown(0.5);
      doc.fontSize(16).fillColor('#a3bffa').text(subtitle, { align: 'left' });
    }

    doc.moveDown(2);
    doc.fillColor('#ffffff').fontSize(12).text(
      'This resource was auto-generated for placeholder purposes. Replace with your branded content when ready.',
      { align: 'left' }
    );

    // Footer
    doc.moveTo(50, doc.page.height - 72)
      .lineTo(doc.page.width - 50, doc.page.height - 72)
      .strokeColor('#333333')
      .stroke();
    doc.fillColor('#aaaaaa').fontSize(10).text('https://www.spotcircuit.com', 50, doc.page.height - 60);

    doc.end();
    stream.on('finish', () => resolve());
    stream.on('error', (err) => reject(err));
  });
}

async function makeXlsx(filePath: string, title: string, sheets: { name: string; headers: string[]; rows?: (string | number)[][] }[]) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'SpotCircuit';
  wb.created = new Date();
  sheets.forEach((s) => {
    const ws = wb.addWorksheet(s.name);
    ws.addRow([title]);
    ws.mergeCells('A1', 'D1');
    ws.getCell('A1').font = { size: 16, bold: true };
    ws.addRow([]);
    ws.addRow(s.headers);
    (s.rows || []).forEach((r) => ws.addRow(r));
    ws.columns = s.headers.map(() => ({ width: 24 }));
  });
  await wb.xlsx.writeFile(filePath);
}

async function run() {
  ensureDir(outDir);

  const assets: Array<{
    out: string;
    kind: 'pdf' | 'xlsx';
    title: string;
    subtitle?: string;
  }> = [
    { out: 'local-seo-checklist.pdf', kind: 'pdf', title: 'Local SEO Checklist', subtitle: 'On-page, Citations, Reviews, and Tracking' },
    { out: 'ai-search-optimization-guide.pdf', kind: 'pdf', title: 'AI Search Optimization Guide', subtitle: 'Optimize for ChatGPT, Google AI Overviews, and More' },
    { out: 'ai-seo-checklist.pdf', kind: 'pdf', title: 'AI SEO Checklist', subtitle: 'Entity, Schema, Content, and Visibility' },
    { out: 'content-optimization-worksheet.pdf', kind: 'pdf', title: 'Content Optimization Worksheet', subtitle: 'Topic, Entities, and SERP Features' },
    { out: 'content-strategy-template.pdf', kind: 'pdf', title: 'Content Strategy Template', subtitle: 'Pillars, Clusters, and Calendar' },
    { out: 'analytics-setup-template.pdf', kind: 'pdf', title: 'Analytics Setup Template', subtitle: 'GA4, Events, and Attribution' },
    { out: 'technical-seo-checklist.pdf', kind: 'pdf', title: 'Technical SEO Checklist', subtitle: 'Crawl, Index, Speed, and CWV' },
    { out: 'ai-seo-tracking-template.xlsx', kind: 'xlsx', title: 'AI SEO Tracking Template' },
  ];

  // Generate PDFs
  for (const a of assets) {
    const filePath = path.join(outDir, a.out);
    if (a.kind === 'pdf') {
      await makePdf(filePath, a.title, a.subtitle);
      // eslint-disable-next-line no-console
      console.log('Created PDF:', a.out);
    } else if (a.kind === 'xlsx') {
      await makeXlsx(filePath, a.title, [
        { name: 'Overview', headers: ['Metric', 'Definition', 'Target', 'Notes'], rows: [
          ['Visibility Score', 'Weighted visibility across AI/search surfaces', '80+', ''],
          ['Entity Coverage', 'Pages with valid schema entities', '90%', ''],
          ['Citation Accuracy', 'Consistent NAP data across platforms', '95%', ''],
        ]},
        { name: 'Weekly Tracking', headers: ['Week', 'Visibility', 'Traffic', 'Leads', 'Notes'] },
      ]);
      // eslint-disable-next-line no-console
      console.log('Created XLSX:', a.out);
    }
  }
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
