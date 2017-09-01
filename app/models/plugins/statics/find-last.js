export default function() {
    return this.findOne({}, {}, { sort: { created_at: -1 } });
}
