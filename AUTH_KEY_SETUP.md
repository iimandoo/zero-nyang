# 인증 키 설정 가이드

## 현재 상태

현재 코드에서는 기본값 `zero-nyang-secret-key`를 사용하고 있습니다.
이 키는 누구나 알 수 있으므로, 보안을 위해 환경 변수로 변경하는 것을 권장합니다.

## 인증 키 설정 방법

### 1. 강력한 키 생성

#### 방법 A: 온라인 도구 사용
- [RandomKeygen](https://randomkeygen.com/) 같은 도구 사용
- 또는 간단하게 긴 랜덤 문자열 생성

#### 방법 B: Node.js로 생성
터미널에서 실행:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### 방법 C: 간단한 키 생성
예시:
- `zero-nyang-2025-secure-key-xyz123`
- `my-secret-key-$(date +%s)` (타임스탬프 포함)

### 2. Vercel에 환경 변수 추가

1. **Vercel Dashboard 접속**
   - https://vercel.com/dashboard

2. **프로젝트 선택**
   - `zero-nyang` 프로젝트 클릭

3. **Settings로 이동**
   - 상단 메뉴에서 **Settings** 탭 클릭

4. **Environment Variables 클릭**
   - 왼쪽 메뉴에서 **Environment Variables** 선택

5. **새 환경 변수 추가**
   - **Add** 또는 **Add New** 버튼 클릭
   - **Key**: `EMAIL_LIST_AUTH_KEY`
   - **Value**: 생성한 강력한 키 입력 (예: `your-secret-key-here`)
   - **Environment**: 
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
     - (모두 체크 권장)
   - **Add** 버튼 클릭

### 3. 재배포

환경 변수를 추가한 후:

**방법 A: 자동 재배포**
- 새 커밋을 푸시하면 자동으로 재배포됩니다

**방법 B: 수동 재배포**
1. Vercel Dashboard → 프로젝트 → **Deployments** 탭
2. 최신 배포의 **...** 메뉴 클릭
3. **Redeploy** 선택

### 4. 새로운 키로 테스트

배포 완료 후:
```
https://zero-nyang.vercel.app/api/email?auth=your-secret-key-here
```

## 현재 키 확인 방법

### 환경 변수가 설정되어 있는지 확인

1. Vercel Dashboard → 프로젝트 → Settings → Environment Variables
2. `EMAIL_LIST_AUTH_KEY`가 있는지 확인
   - **있으면**: 해당 값을 사용
   - **없으면**: 기본값 `zero-nyang-secret-key` 사용

### 코드에서 확인

코드의 71번 줄을 보면:
```typescript
const validAuthKey = process.env.EMAIL_LIST_AUTH_KEY || 'zero-nyang-secret-key';
```

이 코드는:
- 환경 변수가 있으면 → 환경 변수 값 사용
- 환경 변수가 없으면 → `'zero-nyang-secret-key'` 사용

## 보안 권장사항

1. ✅ **강력한 키 사용**
   - 최소 32자 이상의 랜덤 문자열
   - 예측하기 어려운 값

2. ✅ **환경 변수로 관리**
   - 코드에 하드코딩하지 않기
   - Vercel 환경 변수 사용

3. ✅ **정기적으로 변경**
   - 주기적으로 키 변경 권장

4. ✅ **접근 제한**
   - 이메일 목록 조회는 관리자만 접근하도록
   - URL을 공유하지 않기

## 문제 해결

### 키가 작동하지 않는 경우

1. **환경 변수 확인**
   - Vercel Dashboard에서 `EMAIL_LIST_AUTH_KEY`가 설정되어 있는지 확인

2. **재배포 확인**
   - 환경 변수 추가 후 재배포가 완료되었는지 확인

3. **키 값 확인**
   - 공백이나 특수문자가 잘못 입력되지 않았는지 확인
   - URL 인코딩이 필요한 경우 `%20` (공백) 등 확인

4. **기본값 사용**
   - 환경 변수를 삭제하면 기본값 `zero-nyang-secret-key`로 작동합니다
