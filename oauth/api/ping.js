module.exports = function pingHandler(req, res) {
  res.status(200).json({
    ok: true,
    route: "/api/ping"
  });
};
