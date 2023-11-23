<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class PresenceController extends Controller
{
    public function index() {
        return Inertia::render('Presence/Presence', [
            'title' => "Presence Page"
        ]);
    }

    public function information() {
        return Inertia::render('Presence/InformationEmployee', [
            'title' => "Informasi Karyawan"
        ]);
    }

    public function history() {
        return Inertia::render('Presence/PresenceHistory', [
            'title' => 'Riwayat Presensi'
        ]);
    }

    public function help() {
        return Inertia::render('Presence/Help', [
            'title' => "Pusat Bantuan"
        ]);
    }
}
