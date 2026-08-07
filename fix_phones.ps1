$files = @(
  'registration-amendments.html',
  'customs-audit-trade-compliance.html',
  'vat-registration-filing.html',
  'pro-government-services.html',
  'pcfc-trakhees-services.html',
  'company-liquidation.html',
  'share-transfers.html',
  'accounting-bookkeeping.html',
  'audit-assurance.html',
  'service-template.html',
  'other-services.html',
  'payroll-wps-compliance.html',
  'branch-formation.html'
)
foreach ($f in $files) {
  $c = Get-Content $f -Raw
  $c = $c -replace 'tel:\+9715640458022', 'tel:+971564045802'
  Set-Content $f $c -NoNewline
  Write-Host "Fixed: $f"
}
