let fecha = new Date();
fecha.setTime(fecha.getTime() + (24*60*60*1000)); // Mañana
document.cookie = "promo=navidad; expires=" + fecha.toUTCString();