export function getDateDiff(ms: number): string {
  const date = new Date(ms);
  const today = new Date();

  let diff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60));
  let suffix = '시간전';

  if (diff > 24) {
    diff = Math.floor(
      (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    suffix = '일전';
  }

  if (diff > 30) {
    diff = Math.floor(
      (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    suffix = '달전';
  }

  const result: string = String(diff) + suffix;
  return result;
}
