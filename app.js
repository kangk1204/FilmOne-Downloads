const copy = {
  en: {},
  ko: { previousRelease:'0.5.3 보관함 · QR',
    eyebrow:'주머니 속 작은 현상소',title:'조금 더 감성적으로.<br>조금 더 필름답게.',intro:'사진이나 폴더를 선택하세요. 사진마다 어울리는 필름을 고르고 필요한 경우에만 노이즈를 줄입니다. 원본은 그대로 보존합니다.',downloadTitle:'FilmOne을 만나보세요.',download:'Android APK 다운로드',noLogin:'GitHub 로그인 없이 바로 다운로드합니다.',share:'이 페이지 공유',release:'릴리스 안내',scan:'휴대폰 카메라로 스캔하면 APK가 다운로드됩니다.',qrDownload:'QR 코드 저장 (PNG)',installTitle:'다운로드부터 첫 사진까지.',step1:'APK를 다운로드한 뒤 Android 휴대폰에서 파일을 여세요.',step2:'Android에서 요청하면 이 브라우저의 앱 설치를 허용하고 설치를 누르세요.',step3:'FilmOne에서 한 장 편집 또는 폴더 자동 보정을 선택하세요. 폴더 분석·보정·저장 중에는 앱을 열어 두세요.',preview:'테스트 키로 서명한 미리보기 버전입니다. Android 실기기와 독립적인 장면 품질 검증은 아직 완료되지 않았습니다. 용량이 큰 FP32 장면 모델을 내장했습니다.',languageNote:'0.5.4 앱 화면은 한국어입니다. 이 언어 전환은 다운로드 페이지에 적용됩니다.',checksumTitle:'다운로드 파일 검증',checksum:'체크섬 다운로드',readme:'사용 안내 읽기'
  }
};
for (const node of document.querySelectorAll('[data-t]')) copy.en[node.dataset.t]=node.innerHTML;
let language='en';
function setLanguage(value,changeUrl=false){
  language=value==='ko'?'ko':'en';
  document.documentElement.lang=language;
  document.getElementById('previous-release').href='0.5.3/?lang='+language;
  document.querySelector('nav').setAttribute('aria-label',language==='ko'?'언어':'Language');
  document.getElementById('share-fallback').setAttribute('aria-label',language==='ko'?'페이지 링크':'Page link');
  document.title=language==='ko'?'FilmOne — Android 다운로드':'FilmOne — Download for Android';
  document.querySelector('meta[name="description"]').content=language==='ko'?'QR 코드로 FilmOne 0.5.4 Android APK를 다운로드하세요. GitHub 로그인이 필요하지 않습니다.':'Download FilmOne for Android. Scan the QR code to install the 0.5.4 preview. No GitHub login required.';
  for(const node of document.querySelectorAll('[data-t]'))node.innerHTML=copy[language][node.dataset.t];
  for(const link of document.querySelectorAll('[data-lang]'))link.setAttribute('aria-current',String(link.dataset.lang===language));
  document.getElementById('qr').alt=language==='ko'?'FilmOne 0.5.4 Android APK 직접 다운로드 QR 코드':'QR code linking directly to the FilmOne 0.5.4 Android APK';
  document.getElementById('readme').href=language==='ko'?'https://github.com/kangk1204/FilmOne-Downloads/blob/main/README.ko.md':'https://github.com/kangk1204/FilmOne-Downloads#readme';
  document.getElementById('share-status').textContent='';document.getElementById('share-fallback').hidden=true;
  if(changeUrl){const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);}
}
setLanguage(new URL(location.href).searchParams.get('lang'));
for(const link of document.querySelectorAll('[data-lang]'))link.addEventListener('click',event=>{event.preventDefault();setLanguage(link.dataset.lang,true);});
document.getElementById('share').addEventListener('click',async()=>{
  const url=new URL(location.href);url.hash='';url.searchParams.set('lang',language);
  const status=document.getElementById('share-status');
  try{
    if(navigator.share){await navigator.share({title:'FilmOne for Android',url:url.href});return;}
    await navigator.clipboard.writeText(url.href);status.textContent=language==='ko'?'페이지 링크를 복사했어요.':'Page link copied.';
  }catch(error){
    if(error.name==='AbortError')return;
    const input=document.getElementById('share-fallback');input.value=url.href;input.hidden=false;input.focus();input.select();
    status.textContent=language==='ko'?'아래 링크를 복사해 공유하세요.':'Copy the link below to share.';
  }
});
