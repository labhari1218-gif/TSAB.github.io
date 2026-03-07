module.exports = function pingHandler(_req, res) {
  res.status(200).json({
    ok: true,
    route: "/api/ping"
  });
};
