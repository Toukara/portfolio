export default (await import('vue')).defineComponent({
components: {
Logo
},
data() {
return {
width: window.innerWidth
};
}
// mounted() {
//   window.addEventListener('resize', () => {
});
