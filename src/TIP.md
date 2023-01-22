- api 프로퍼티 타입 콘솔 디버깅 팁
  Object.keys()
  Object.values()
  Object.values().map(v => typeof v).join()

```tsx
console.log("info:", priceData.quotes);
console.log(
  "infoData:",
  Object.values(priceData.quotes)
    .map((v: any) => typeof v)
    .join()
);
```
