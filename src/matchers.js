export default function healthPlayer(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
