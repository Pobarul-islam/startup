import React from 'react';

import {
  BsFacebook,
  BsFillEnvelopeOpenFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const TopNav = () => {
  return (
    <div>
      <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
          <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              style={{ height: '40px' }}
              class="d-inline-flex align-items-center"
            >
              <small class="me-3 text-light">
                <BsFillGeoAltFill></BsFillGeoAltFill>123 Street, New York, USA
              </small>
              <small class="me-3 text-light">
                <BsFillTelephoneFill></BsFillTelephoneFill>+012 345 6789
              </small>
              <small class="text-light">
                <BsFillEnvelopeOpenFill></BsFillEnvelopeOpenFill>
                info@example.com
              </small>
            </div>
          </div>
          <div class="col-lg-4 text-center text-lg-end">
            <div
              style={{ height: '40px' }}
              class="d-inline-flex align-items-center"
            >
              <Link
                class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <BsTwitter></BsTwitter>
              </Link>
              <Link
                class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <BsFacebook></BsFacebook>
              </Link>
              <Link
                class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <BsLinkedin></BsLinkedin>
              </Link>
              <Link
                class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <BsInstagram></BsInstagram>
              </Link>
              <Link
                class="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href=""
              >
                <BsYoutube></BsYoutube>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
